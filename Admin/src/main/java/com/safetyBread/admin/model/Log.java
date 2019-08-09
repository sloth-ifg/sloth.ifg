package com.safetyBread.admin.model;

public class Log {
	private int id;
	private String skill;
	private String user;
	private String msg;
	private String date;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "{\"id\":" + id + ", \"skill\" : \"" + skill + "\", \"user\": \"" + user + "\", \"msg\":\"" + msg + "\", \"date\" : \"" + date + "\"}";
	}
}
