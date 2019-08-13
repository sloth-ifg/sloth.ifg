package com.safetyBread.admin.control;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
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

import com.safetyBread.admin.service.ManagerService;
import com.safetyBread.admin.util.Crypto;

@SuppressWarnings("unchecked")
@RestController
@RequestMapping("/manager")
public class ManagerControl {
	@Autowired
	private ManagerService service;
	
	@GetMapping("/{index}")
	public JSONObject manager(@PathVariable String index, @RequestParam(required = false) String id, @RequestParam(required = false) String name, @RequestParam(required = false) String role) throws ParseException {
		JSONObject result = new JSONObject();
		
		result.put("list", service.getManagerList(index, id, name, role));
		result.put("total", service.getTotal(index, id, name, role));
		
		return result;
	}
	
	@PostMapping("/add")
	public void add(HttpServletResponse response, @RequestBody Map<String, String> manager) throws ParseException, IOException {
		try {
			manager.replace("password", Crypto.SHA256(manager.get("password")));
			
			service.addManager(manager);
		} catch (NoSuchAlgorithmException e) {
			response.sendError(500, e.getMessage());
		}
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable String id) {
		service.deleteManager(id);
	}
	
	@PostMapping("/modify")
	public void modify(HttpServletResponse response, @RequestBody Map<String, String> manager) {
		service.modifyManager(manager);
	}
}
