package com.safetyBread.admin.util;

import com.safetyBread.admin.model.Log;

public class TextConverter {

	public static String getLogTitle() {
		return "ID, Skill, User, Message, Date\n";
	}

	public static String convertLog(Log log) {
		return log.getId() + "," + log.getSkill() + "," + log.getUser() + "," + log.getMsg() + "," + log.getDate() + "\n";
	}
	
}
