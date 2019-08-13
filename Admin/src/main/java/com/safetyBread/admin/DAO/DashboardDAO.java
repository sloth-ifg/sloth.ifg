package com.safetyBread.admin.DAO;

import java.util.List;
import java.util.Map;

import com.safetyBread.admin.model.Log;
import com.safetyBread.admin.model.Manager;

public interface DashboardDAO {
	List<Log> selectLogs();
	List<Manager> selectManagers();
	Manager getManager(Map<String, String> param);
	void insertToken(Map<String, String> param);
	void deleteToken(Map<String, String> param);
	Integer checkSession(Map<String, String> param);
}
