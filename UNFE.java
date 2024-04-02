package com.project.fullstack.exception;

public class UNFE extends RuntimeException{
  public UNFE(long id) {
	  super("could not found element with id:"+id);
  }
}
