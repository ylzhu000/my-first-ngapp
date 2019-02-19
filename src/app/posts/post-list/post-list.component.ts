import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [ 
  //   { title: 'First post', content: 'This is the first post\'s content'},
  //   { title: 'Second post', content: 'This is the second post\'s content'},
  // ];

  posts: Post[] = [];

  constructor(public postService: PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
