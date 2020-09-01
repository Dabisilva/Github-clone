export interface APIUser {
    login: string
    name: string
    following:  number
    followers: number
    public_repos: number
    avatar_url: string
    blog?: string
    company?: string
    email?: string
    location?: string
}

export interface APIRepo {
    name: string
    owner: {
        login:string
    }
    stargazers_count: number
    forks: number
    hmtl_url: string
    language?: string
    description?: string
}