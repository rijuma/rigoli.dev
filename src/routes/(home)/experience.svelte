<script lang="ts">
  import { Timeline } from '$lib/components'

  import type { TimelineEntry } from '$lib/types'

  const data: TimelineEntry[] = [
    {
      name: '2U / edX',
      slug: '2u-edx',
      pic: '/img/companies/2u-edx.svg',
      from: new Date(2020, 3, 1),
      role: 'Full-stack developer',
      tech: ['NodeJS', 'ReactJS', 'Python (Django)'],
      info: ['Lorem ipsum dolor sit amet'],
    },
    {
      name: 'Mejuri',
      slug: 'mejuri',
      pic: '/img/companies/mejuri.svg',
      from: new Date(2018, 8, 1),
      to: new Date(2020, 3, 1),
      role: 'Full-stack developer',
      tech: ['Ruby on Rails', 'ReactJS'],
      info: ['Lorem ipsum dolor sit amet'],
    },
    {
      name: 'Making Sense',
      slug: 'making-sense',
      pic: '/img/companies/making-sense.svg',
      from: new Date(2017, 4, 1),
      to: new Date(2018, 8, 1),
      role: 'Frontend developer',
      tech: ['ReactJS', 'Vanilla JS', 'jQuery'],
      info: ['Lorem ipsum dolor sit amet'],
    },
    {
      name: 'Avatar LA',
      slug: 'avatar-la',
      pic: '/img/companies/avatar-la.svg',
      from: new Date(2015, 7, 1),
      to: new Date(2017, 4, 1),
      role: 'Full-stack developer',
      tech: ['PHP (Laravel)', 'MongoDB', 'jQuery'],
      info: ['Lorem ipsum dolor sit amet'],
    },
    {
      name: 'Dinamix Studio',
      slug: 'dinamix-studio',
      pic: '/img/companies/dinamix-studio.png',
      from: new Date(2010, 2, 1),
      to: new Date(2015, 7, 1),
      role: 'Full-stack developer',
      tech: ['PHP', 'Vanilla JS', 'jQuery'],
      info: ['Lorem ipsum dolor sit amet'],
    },
  ]
</script>

<h2>Job Experience</h2>
<Timeline {data} />
