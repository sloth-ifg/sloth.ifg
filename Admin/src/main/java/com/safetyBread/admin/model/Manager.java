package com.safetyBread.admin.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Manager {
	private String id;
	private String name;
	private String role;
	
	@Override
	public String toString() {
		return "{\"id\": \"" + id + "\", \"name\" : \"" + name + "\", \"role\": \"" + role + "\"}";
	}
}
