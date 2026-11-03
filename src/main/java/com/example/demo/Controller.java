package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@CrossOrigin("*")


public class Controller {

	
	private final Reposistory rep;
	
	 public Controller(Reposistory rep) {
	        this.rep = rep;
	    }
	@PostMapping("/postData/mysql")
	
	public UserEntity PostData(@RequestBody UserEntity user) {
		
		
		return rep.save(user);
		
		
	}
	
	@GetMapping("/GetData/mysql")
	public List<UserEntity> getData(){
		
		
		   return rep.findAll();
	}
}
