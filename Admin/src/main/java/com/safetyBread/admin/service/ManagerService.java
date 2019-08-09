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
	
	public List<Manager> getManagerList(int index, String id, String name, String role) {
		Map<String, Object> param = new HashMap<String, Object>();

		param.put("index", index);
		param.put("id", id);
		param.put("name", name);
		param.put("role", role);
		
		return dao.selectManagers(param);
	}
	
	public long getTotal(int index, String id, String name, String role) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("id", id);
		param.put("name", name);
		param.put("role", role);
		
		return dao.getTotalCount(param).get("total");
	}
}
