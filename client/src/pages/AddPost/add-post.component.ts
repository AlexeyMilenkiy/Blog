import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../interfaces/post';
import {PostService} from '../../app/shared/services/post.service';
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})

export class AddPostComponent implements OnInit, OnDestroy {
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  post: Post = {
    title: '',
    text: '',
    date: '',
    author_id: null
  };
  isAdded = false;
  isError = false;
  form: FormGroup;

  constructor(private postService: PostService) {}

  addPost() {
    if (this.form.invalid) {
      return;
    }

    this.post = {
      title: this.form.value.title,
      text: this.form.value.text,
      author_id: parseInt(localStorage.getItem('id'), 10),
      date: PostService.getDate()
    };

    this.postService.addPost(this.post)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.form.reset();
        this.isAdded = true;
      },
      () => this.isError = true );
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
