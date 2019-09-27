import {Component, OnInit} from '@angular/core';
import {PostService} from '../../app/shared/services/post.service';
import {PostResponse} from '../../interface/post-response';

@Component({
  selector: 'friends-posts',
  templateUrl: './friends-posts.component.html',
  styleUrls: ['./friends-posts.component.less']
})

export class FriendsPostsComponent implements OnInit {
  friendsPosts: PostResponse[] = [];
  activeUserId = parseInt(localStorage.getItem('id'), 10);
  isError = false;
  isEmpty = false;
  isSort = false;
  isIncrease = true;

  constructor(private postService: PostService) {}

  // sortArray() {
  //   this.isIncrease = !this.isIncrease;
  //   if (this.isIncrease) {
  //     this.friendsPosts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
  //   } else {
  //     this.friendsPosts.sort((a, b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 0 : -1));
  //   }
  // }


  ngOnInit(): void {
    this.postService.getMyFriendsPosts(this.activeUserId)
      .subscribe((friends: PostResponse[]) => {
        console.log(friends);
        if (friends.length) {
            this.isSort = friends.length !== 1;
            this.isEmpty = false;
            // posts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
            this.friendsPosts = [...friends];
          } else {
            this.isEmpty = true;
          }
        },
        () => {
        this.isEmpty = true;
        this.isError = true;
      });
  }
}
