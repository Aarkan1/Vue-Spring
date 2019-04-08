package web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import web.entities.Post;
import web.services.PostService;

import java.util.Date;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

  @Autowired
  private PostService postService;

  @GetMapping(value = "/posts")
  public List<Post> posts(){
    return postService.getAllPosts();
  }

  @PostMapping(value = "/post")
  public void publishPost(@RequestBody Post post){
    if(post.getDateCreated() == null)
      post.setDateCreated(new Date());
    postService.insertPost(post);
  }

}
