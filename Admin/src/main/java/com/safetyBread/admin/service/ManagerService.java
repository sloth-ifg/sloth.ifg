package com.safetyBread.admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetyBread.admin.DAO.ManagerDAO;
import com.safetyBread.admin.model.Manager;

@Service
public class ManagerService {
	@Autowired
	private ManagerDAO dao;
	
	public List<Manager> getManagerList(String index, String id, String name, String role) {
		Map<String, String> param = new HashMap<String, String>();

		param.put("index", index);
		param.put("id", id);
		param.put("name", name);
		param.put("role", role);
		
		return dao.selectManagers(param);
	}
	
	public long getTotal(String index, String id, String name, String role) {
		Map<String, String> param = new HashMap<String, String>();
		
		param.put("id", id);
		param.put("name", name);
		param.put("role", role);
		
		return dao.getTotalCount(param).get("total");
	}
	
	public void addManager(Map<String, String> manager) {
		dao.addManager(manager);
	}
	
	public void deleteManager(String id) {
		dao.deleteManager(id);
	}
	
	public void modifyManager(Map<String, String> manager) {
		dao.modifyManager(manager);
	}
}
