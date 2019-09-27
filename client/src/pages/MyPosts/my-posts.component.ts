import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../app/shared/services/post.service';
import {Post} from '../../interfaces/post';
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.less']
})

export class MyPostsComponent implements OnInit, OnDestroy {
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  posts: Post[] = [];
  authorName: string = localStorage.getItem('name');
  isError = false;
  isEmpty = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'), 10);
    this.postService.getMyPosts(userId)
      .pipe(takeUntil(this.destroy))
      .subscribe((posts: Post[]) => {
        if (posts.length) {
          this.isEmpty = false;
          this.posts = [...posts];
        } else {
          this.isEmpty = true;
        }
      },
        () => this.isError = true
      );
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
