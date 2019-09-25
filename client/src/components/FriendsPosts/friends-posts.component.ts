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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id'));
    this.postService.getMyFriendsPosts(userId)
      .subscribe(posts => {
        console.log(posts)
      });
  }
}
