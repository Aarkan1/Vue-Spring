package web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.entities.Post;
import web.repositories.PostRepo;

import java.util.Date;

@RestController
@RequestMapping("/api/posts")
public class PostController {

  @Autowired
  private PostRepo postRepo;

  @GetMapping
  public Iterable<Post> posts() {
    return postRepo.findAll();
  }

  @PostMapping
  public Post publishPost(@RequestBody Post post) {
    if (post.getDateCreated() == null)
      post.setDateCreated(new Date());
    return postRepo.save(post);
  }

  @PutMapping("/{id}")
  public void updatePost(
          @PathVariable Long id,
          @RequestBody Post post) {
    postRepo.save(post);

  }

  @DeleteMapping("/{id}")
  public void deletePost(
          @PathVariable Long id,
          @RequestBody Post post) {
    postRepo.delete(post);
  }

}
