export interface Post {
  id?: number;
  title: string;
  text: string;
  date: string;
  author_id: number;
  user?: PostAuthor;
}

interface PostAuthor {
    id: number;
    name: string;
    follower: object;
}
