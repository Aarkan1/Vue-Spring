package web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.entities.Post;
import web.services.PostService;

import java.util.Date;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestApiController {

  @Autowired
  private PostService postService;

  @GetMapping("/posts")
  public List<Post> posts() {
    return postService.getAllPosts();
  }

  @PostMapping("/post")
  public Post publishPost(@RequestBody Post post) {
    if (post.getDateCreated() == null)
      post.setDateCreated(new Date());
    return postService.insertPost(post);
  }

  @PutMapping("/post/{id}")
  public void updatePost(
          @PathVariable(value = "id") Long postId,
          @RequestBody Post post) {
    postService.insertPost(post);
  }

  @DeleteMapping("/post/{id}")
  public void deletePost(
          @PathVariable(value = "id") Long postId,
          @RequestBody Post post) {
    postService.deletePost(post);
  }

}
