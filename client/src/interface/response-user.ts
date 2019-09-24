export interface ResponseUser {
  name: string,
  id: number,
  follower: Follower | null
}

interface Follower {
  id: number
}
