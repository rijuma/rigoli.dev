export type GithubOrg = {
  tag: string
  profileUrl: string
  avatarUrl: string
  description: string
}

export type GithubUser = {
  tag: string
  avatarUrl: string
  profileUrl: string
  orgs: GithubOrg[]
  hireable: boolean
}
