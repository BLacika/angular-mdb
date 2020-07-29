import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Observable<Post[]>;

  loading: boolean;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.postService.getAllPost().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => console.log(error)
    );
    this.loading = false;
  }

  onAddPost() {
    this.router.navigate(['posts/add']);
  }
}
