package com.safetyBread.admin.util;

import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Base64.Encoder;

import com.safetyBread.admin.model.Manager;

public class TokenMaker {
	public static String Create(Manager manager) throws NoSuchAlgorithmException {
		Encoder encoder = Base64.getEncoder();
		
		return encoder.encodeToString(manager.toString().getBytes());
	}
}
