package com.safetyBread.admin.service;

import java.util.List;

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
}
