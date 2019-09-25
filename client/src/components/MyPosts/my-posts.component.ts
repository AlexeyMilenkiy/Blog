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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'));
    this.postService.getMyPosts(userId)
      .subscribe((posts: Post[]) => {
        this.posts = [...posts];
      });
  }
}
