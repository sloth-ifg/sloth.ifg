package com.safetyBread.admin.DAO;

import java.util.List;
import java.util.Map;

import com.safetyBread.admin.model.Log;

public interface LogDAO {
	List<Log> totalLogs(Map<String, Object> map);
	List<Log> getLogs(Map<String, Object> map);
	Map<String, Long> getTotalCount(Map<String, Object> map);
	void insertLog(Map<String, String> param);
}
