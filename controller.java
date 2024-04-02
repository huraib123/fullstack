package com.project.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.fullstack.exception.UNFE;
import com.project.fullstack.mode.User;
import com.project.fullstack.repository.userrepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class controller {
 
	@Autowired
	private userrepository urep;
	
	@PostMapping("/user")
	 User newuser(@RequestBody User newuser) {
		return urep.save(newuser);
	}
	@GetMapping("/users")
	List<User> getalluser(){
		return urep.findAll();
	}
	@GetMapping("/user/{id}")
	User getuserbyid(@PathVariable long id) {
		return urep.findById(id)
				.orElseThrow(()->new UNFE(id));
	}
	@PutMapping("/user/{id}")
	User updateuser(@RequestBody User newuser,@PathVariable long id) {
		return urep.findById(id).map(user->{
			user.setUsername(newuser.getUsername());
			user.setName(newuser.getName());
			user.setEmail(newuser.getEmail());
			return urep.save(user);
		}
				).orElseThrow(()->new UNFE(id));
		
	}
	@DeleteMapping("/user/{id}")
	 String deletebyid(@PathVariable long id) {
		if(!urep.existsById(id)) {
			throw new UNFE(id);
		}
		else {
			urep.deleteById(id);
			return "user with the id" +id+"has been deleted successfully";
		}
	}
	
}
