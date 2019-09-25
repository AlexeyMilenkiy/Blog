import {Component, OnInit} from '@angular/core';
import {PostService} from '../../app/shared/services/post.service';
import {Post} from '../../interface/post';

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.less']
})

export class MyPostsComponent implements OnInit {
  posts: Post[] = [];
  authorName: string = localStorage.getItem('name');
  isError: boolean = false;
  isEmpty: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'));
    this.postService.getMyPosts(userId)
      .subscribe((posts: Post[]) => {
        console.log(posts);
        if(posts.length) {
          this.isEmpty = false;
          this.posts = [...posts];
        } else {
          this.isEmpty = true;
        }
      },
        error => {
          if(error) this.isError = true
        }
      );
  }
}
