<script lang="ts">
  import { PUBLIC_DOMAIN } from '$env/static/public'
  import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags'
  import { page } from '$app/state'
  import { FIRST_NAME, GITHUB_PIC_SIZE, GITHUB_TAG, LAST_NAME, NAME } from '$lib/const'

  import type { GithubUser } from '$lib/types'

  let { ...overrides }: Partial<MetaTagsProps> = $props()

  const canonicalRoot = PUBLIC_DOMAIN ? `https://${PUBLIC_DOMAIN}` : ''

  const canonical = canonicalRoot ? `${canonicalRoot}${page.url.pathname}` : page.url.pathname

  let github = $derived(page.data?.github) as GithubUser

  const title = `${NAME}'s' developer profile`
</script>

{#key page.url.pathname}
  <MetaTags
    title="Profile"
    titleTemplate={`%s | ${NAME}`}
    description={github.bio}
    {canonical}
    openGraph={{
      url: canonical,
      title,
      profile: {
        firstName: FIRST_NAME,
        lastName: LAST_NAME,
        username: GITHUB_TAG,
      },
      description: github.bio,
      images: [
        {
          url: github.avatarUrl,
          width: GITHUB_PIC_SIZE,
          height: GITHUB_PIC_SIZE,
          alt: 'Profile picture',
        },
      ],
      siteName: title,
    }}
    additionalMetaTags={[
      {
        property: 'dc:creator',
        content: NAME,
      },
    ]}
    {...overrides}
  />
{/key}
