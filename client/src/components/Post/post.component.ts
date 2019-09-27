import {Component, Input} from '@angular/core';
import {Post} from '../../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})

export class PostComponent {
  @Input() posts: Post[]
  @Input() name: string
}
