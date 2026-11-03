package com.example.demo;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice


public class ErrorException {
	
	
	@ExceptionHandler(Exception.class)
	
	public ResponseEntity<String>error(Exception e){
		
		e.printStackTrace();
		
		return new ResponseEntity<>(
				 "Something Went Wrong: " + e.getMessage(),
		            HttpStatus.INTERNAL_SERVER_ERROR
				);
		
	}

}
