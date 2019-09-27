export interface ResponseUser {
  name: string;
  id: number;
  followers: Follower | null;
}

interface Follower {
  follower: number;
  id?: number;
}
