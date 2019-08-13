package com.safetyBread.admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetyBread.admin.DAO.DashboardDAO;
import com.safetyBread.admin.model.Log;
import com.safetyBread.admin.model.Manager;

@Service
public class DashboardService {
	@Autowired
	private DashboardDAO dao;
	
	public List<Log> getRecentLogs() {
		return dao.selectLogs();
	}
	
	public List<Manager> getRecentManagers() {
		return dao.selectManagers();
	}
	
	public Manager getManager(Map<String, String> manager) {
		return dao.getManager(manager);
	}
	
	public void insertToken(String id, String token) {
		Map<String, String> param = new HashMap<String, String>();
		
		param.put("id", id);
		param.put("token", token);
		
		dao.insertToken(param);
	}
	
	public void deleteToken(Map<String, String> param) {
		dao.deleteToken(param);
	}
	
	public boolean checkSession(Map<String, String> param) {
		return dao.checkSession(param) > 0 ? true : false;
	}
}
