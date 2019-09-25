import {Component, OnInit} from '@angular/core';
import {Post} from '../../interface/post';
import {PostService} from '../../app/shared/services/post.service';

@Component({
  selector: 'friends-posts',
  templateUrl: './friends-posts.component.html',
  styleUrls: ['./friends-posts.component.less']
})

export class FriendsPostsComponent implements OnInit {
  friendsPosts: Post[] = [];
  isError: boolean = false;
  isEmpty: boolean = false;
  isSort: boolean = false;
  isIncrease: boolean = true;

  constructor(private postService: PostService) {}

  sortArray() {
    this.isIncrease = !this.isIncrease;
    if(this.isIncrease) {
      this.friendsPosts.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    } else {
      this.friendsPosts.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 0 : -1));
    }
  }


  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'));
    this.postService.getMyFriendsPosts(userId)
      .subscribe(posts => {
          if (posts.length) {
            this.isSort = posts.length !== 1;
            this.isEmpty = false;
            posts.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
            this.friendsPosts = [...posts];
          } else {
            this.isEmpty = true;
          }
        },
        (error => {
          if (error) this.isError = true
        })
      );
  }
}
