import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../app/shared/services/post.service';
import {Post} from '../../interfaces/post';
import {Subscription} from "rxjs";

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.less']
})

export class MyPostsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  posts: Post[] = [];
  authorName: string = localStorage.getItem('name');
  isError = false;
  isEmpty = false;
  activeUserId = parseInt(localStorage.getItem('id'), 10);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.postService.getMyPosts(this.activeUserId)
      .subscribe((posts: Post[]) => {
        if (posts.length) {
          this.isEmpty = false;
          this.posts = [...posts];
        } else {
          this.isEmpty = true;
        }
      },
        () => this.isError = true
      ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
