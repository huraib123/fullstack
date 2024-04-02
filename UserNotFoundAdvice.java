package com.project.fullstack.exception;



import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserNotFoundAdvice {
	@ResponseBody
	@ExceptionHandler(UNFE.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
   public Map<String,String> exceptionHandler(UNFE exception){
	  HashMap<String,String> map=new HashMap<>();
	   map.put("error",exception.getMessage());
	   return map;
	   
   }
}
