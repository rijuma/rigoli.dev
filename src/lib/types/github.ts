export type GithubOrg = {
  tag: string
  profileUrl: string
  avatarUrl: string
  description: string
}

export type GithubUser = {
  tag: string
  bio: string
  avatarUrl: string
  profileUrl: string
  orgs: GithubOrg[]
  hireable: boolean
}
