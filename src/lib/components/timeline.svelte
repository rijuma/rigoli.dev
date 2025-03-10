<div class="timeline">
  {#each Array(10) as elem}
    <div class="event">
      <a href="/" class="info">
        <div class="aside">
          <div class="dates">
            <div class="from">June 2017</div>
            <div class="to">until March 2025</div>
          </div>
          <div class="logo">
            <img src="/img/companies/2u.svg" alt="Company" />
          </div>
        </div>
        <div class="details">
          <h3>Company</h3>
          <p>Lorem ipsum..</p>
        </div>
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  .event {
    --pin-background: var(--site-background);
    --pin-radius: 0.6rem;
    --pin-margin: 1.4em;
    --arrow-margin: 0.5rem;
    --arrow-height: 0.8rem;
    --path-color: color-mix(in oklab, var(--accent-color), transparent 50%);
    --block-color: color-mix(in oklab, var(--path-color), transparent 90%);
    --block-color-hover: color-mix(in oklab, var(--path-color), transparent 80%);
    --line-radius: 2.25rem;
    --line-width: 3px;
    --outer-padding: 2rem;
    --inner-padding: 0.5rem;
    --padding: calc(var(--outer-padding) + var(--inner-padding));
    --title-size: 1.8rem;
    --text-size: 1.1rem;

    position: relative;
    margin: calc(var(--line-width) * -1);
    padding: var(--outer-padding);

    // Timeline path
    &::before {
      content: '';
      position: absolute;
      pointer-events: none;
      inset: 0;
      border: var(--line-width) solid var(--path-color);
    }

    &:nth-child(odd) {
      // C-like form for the timeline path
      &::before {
        border-right: 0;
        border-radius: var(--line-radius) 0 0 var(--line-radius);
        right: 50%;
      }

      // Left pin positions
      .aside {
        &::after,
        &::before {
          transform: translate(-50%, -50%);
          inset: var(--pin-margin) auto auto calc(((var(--padding) - var(--line-width) / 2)) * -1);
        }

        // Left pin arrow
        &::before {
          transform: translate(0, -50%);
        }
      }
    }

    &:nth-child(even) {
      // Inverted C-like form for the timeline path
      &::before {
        border-left: 0;
        border-radius: 0 var(--line-radius) var(--line-radius) 0;
        left: 50%;
      }

      .info {
        flex-direction: row-reverse;
      }

      .aside {
        // Right pin positions
        &::before,
        &::after {
          transform: translate(50%, -50%);
          inset: var(--pin-margin) calc(((var(--padding) - var(--line-width) / 2)) * -1) auto auto;
        }

        // Right pin arrow
        &::before {
          transform: translate(0, -50%) scaleX(-1);
        }
      }
    }

    &:first-child {
      // Timeline path
      &::before {
        border-block-start: 0;
        border-start-start-radius: 0;
        top: calc(var(--arrow-margin) + var(--arrow-height) / 2);
      }

      // Top arrow
      &::after {
        content: '';
        border-style: solid;
        border-width: 0.8rem;
        border-color: transparent transparent var(--accent-color);
        position: absolute;
        inset: var(--arrow-margin) auto auto 0;
        transform: translate(calc(-50% + var(--line-width) / 2), -50%);
      }
    }
  }

  .info {
    position: relative;
    display: flex;
    gap: 2rem;
    line-height: 1.5;
    background: var(--block-color);
    padding: var(--inner-padding);
    border-radius: 1rem;
    border: 2px solid transparent;
    color: currentColor;

    * {
      pointer-events: none;
    }

    &:hover {
      background: var(--block-color-hover);
      border-color: var(--accent-color);
    }
  }

  .aside {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &::before {
      --arrow-height: calc(var(--pin-radius) * 1.125);
      content: '';
      position: absolute;
      border-style: solid;
      border-width: var(--arrow-height) calc(var(--arrow-height) * 2);
      // border-color: transparent transparent transparent var(--accent-color);
      border-color: transparent transparent transparent var(--accent-color);
    }

    &::after {
      content: '';
      position: absolute;
      border-radius: 99rem;
      border: var(--line-width) solid var(--accent-color);
      width: calc(var(--pin-radius) * 2);
      height: calc(var(--pin-radius) * 2);
      background: var(--pin-background);
    }
  }

  .dates {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .from {
    font-size: var(--title-size);
    font-weight: bold;
  }

  .to {
    font-size: var(--text-size);
  }

  .logo {
    display: grid;
    place-items: center;
    flex-grow: 1;

    img {
      max-width: 3rem;
    }
  }

  .details {
    flex-grow: 1;
  }

  h3 {
    font-size: var(--title-size);
    line-height: 1.5;
    margin-block-end: 0;
  }

  p {
    font-size: var(--text-size);
    color: currentColor;
  }
</style>
