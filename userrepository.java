package com.project.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.fullstack.mode.User;

public interface userrepository extends JpaRepository<User,Long>{

}
