export interface PostResponse {
  name: string;
  posts: Data[];
}

interface Data {
  title: string;
  text: string;
  date: string;
}
