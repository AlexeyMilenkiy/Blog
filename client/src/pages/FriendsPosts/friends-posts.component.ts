import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../app/shared/services/post.service';
import {PostResponse} from '../../interfaces/post-response';
import {Post} from '../../interfaces/post';
import {Subscription} from "rxjs";

@Component({
  selector: 'friends-posts',
  templateUrl: './friends-posts.component.html',
  styleUrls: ['./friends-posts.component.less']
})

export class FriendsPostsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  friendsPosts: Post[] = [];
  activeUserId = parseInt(localStorage.getItem('id'), 10);
  isError = false;
  isEmpty = false;
  isSort = false;
  isIncrease = true;
  constructor(private postService: PostService) {}

  sortArray() {
    this.isIncrease = !this.isIncrease;
    if (this.isIncrease) {
      this.friendsPosts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    } else {
      this.friendsPosts.sort((a, b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 0 : -1));
    }
  }

  ngOnInit(): void {
    this.subscriptions.add(this.postService.getMyFriendsPosts(this.activeUserId)
      .subscribe((friends: PostResponse[]) => {
        if (friends.length) {
            friends.forEach(friend => {
              friend.posts.map(post => {
                 post.name = friend.name;
                 this.friendsPosts.push(post);
              });
            });
            this.isSort = true;
        } else {
            this.isEmpty = true;
            this.isSort = false;
          }
        },
() => {
        this.isEmpty = true;
        this.isError = true;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
