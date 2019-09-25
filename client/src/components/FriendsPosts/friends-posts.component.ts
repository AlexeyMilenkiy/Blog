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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'));
    this.postService.getMyFriendsPosts(userId)
      .subscribe(posts => {
        if(posts.length){
          this.isEmpty = false;
          this.friendsPosts = [...posts];
        } else  {
          this.isEmpty = true;
          }
      },
        (error => this.isError = true));
  }
}
