# Reference: https://towardsserverless.com/articles/dockerize-sveltekit-ssr-webapp

# Build the first stage with alpine node image and name as build.
FROM node:24-alpine as build

# Update and install the latest dependencies on docker base image.
# Add non root user to the docker image and set the user.
RUN apk update && apk upgrade && adduser -D svelteuser
USER svelteuser

# set work dir as app
WORKDIR /app

# Copy the sveltkit project content with proper permission for the user svelteuser.
COPY --chown=svelteuser:svelteuser . /app

# Instal dependencies and build.
RUN npm install && npm run build

# We are using multi stage build process to keep the image size as small as possible
FROM node:24-alpine

# Update and install latest dependencies, add dumb-init package
# add and set non root user.
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser

# Set work dir as app.
WORKDIR /app

# Copy the build directory to the /app directory of second stage.
COPY --chown=svelteuser:svelteuser --from=build /app/build /app/package.json ./

ARG PORT

# Expose PORT on container.
EXPOSE ${PORT}

# Set app host and port and env as production.
ENV HOST=0.0.0.0 PORT=${PORT} NODE_ENV=production

# Install dependencies only (omitting devDependencies).
RUN npm install --omit=dev

# Start the app with dumb init to spawn the Node.js runtime process
# with signal support.
CMD ["dumb-init","node","index.js"]