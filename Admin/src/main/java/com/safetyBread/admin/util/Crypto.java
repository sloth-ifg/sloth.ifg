package com.safetyBread.admin.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Crypto {
	public static String SHA256(String plain) throws NoSuchAlgorithmException {
		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		
		digest.update(plain.getBytes());
		
		return Crypto.byteToHexString(digest.digest());
	}
	
	public static String byteToHexString(byte[] data) {
	    StringBuilder builder = new StringBuilder();

	    for(byte b : data) 
	    	builder.append(Integer.toString((b & 0xff) + 0x100, 16).substring(1));

	    return builder.toString();
	}
}
