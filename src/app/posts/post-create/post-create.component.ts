import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

// Declarator
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPostContent = '';
  newPostTitle = '';

  constructor(public postService: PostService) { }

  ngOnInit() {

  }

  onSubmitPost(form: NgForm) {
    if (!form.invalid) {
      this.postService.addPost(form.value.title, form.value.content)
    }
  }

}
