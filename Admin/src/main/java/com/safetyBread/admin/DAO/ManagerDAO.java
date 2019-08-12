package com.safetyBread.admin.DAO;

import java.util.List;
import java.util.Map;

import com.safetyBread.admin.model.Manager;

public interface ManagerDAO {
	List<Manager> selectManagers(Map<String, Object> param);
	Map<String, Long> getTotalCount(Map<String, Object> map);
	void addManager(Map<String, Object> map);
}
