package com.safetyBread.admin.control;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.safetyBread.admin.model.Manager;
import com.safetyBread.admin.service.ManagerService;
import com.safetyBread.admin.util.Crypto;

@SuppressWarnings("unchecked")
@RestController
@RequestMapping("/manager")
public class ManagerControl {
	@Autowired
	private ManagerService service;
	
	@GetMapping("/{index}")
	public JSONObject manager(@PathVariable int index, @RequestParam(required = false) String id, @RequestParam(required = false) String name, @RequestParam(required = false) String role) throws ParseException {
		JSONArray list = new JSONArray();
		JSONParser parser = new JSONParser();
		JSONObject result = new JSONObject();
		
		for (Manager manager : service.getManagerList(index, id, name, role)) {
			list.add(parser.parse(manager.toString()));
		}
		
		result.put("list", list);
		result.put("total", service.getTotal(index, id, name, role));
		
		return result;
	}
	
	@PostMapping("/add")
	public void add(HttpServletResponse response, @RequestBody JSONObject manager) throws ParseException, IOException {
		try {
			service.addManager(manager.get("id"), manager.get("name"), manager.get("role"), Crypto.SHA256((String) manager.get("password")));
		} catch (NoSuchAlgorithmException e) {
			response.sendError(500, e.getMessage());
		}
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable String id) {
		
	}
}
