package com.example.demo;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.persistence.*;



 @Entity
@Table(name="Login")
public class UserEntity {

	
	@Id
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private int Id;
	private String UserName;
	private String Password;
	private String ConfromPassword;
	
	
	
	public String getName() {
		
		return UserName;
	}
	public void setName(String name) {
		UserName = name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getConfromPassword() {
		return ConfromPassword;
	}
	public void setConfromPassword(String confromPassword) {
		ConfromPassword = confromPassword;
	}
	
}
