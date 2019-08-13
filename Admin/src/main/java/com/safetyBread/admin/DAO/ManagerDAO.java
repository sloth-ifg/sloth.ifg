package com.safetyBread.admin.DAO;

import java.util.List;
import java.util.Map;

import com.safetyBread.admin.model.Manager;

public interface ManagerDAO {
	List<Manager> selectManagers(Map<String, String> param);
	Map<String, Long> getTotalCount(Map<String, String> param);
	void addManager(Map<String, String> param);
	void deleteManager(String id);
	void modifyManager(Map<String, String> param);
}
