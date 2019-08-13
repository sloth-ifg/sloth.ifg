package com.safetyBread.admin.DAO;

import java.util.List;
import java.util.Map;

import com.safetyBread.admin.model.Log;

public interface LogDAO {
	List<Log> totalLogs(Map<String, String> map);
	List<Log> getLogs(Map<String, String> map);
	Map<String, Long> getTotalCount(Map<String, String> map);
	void insertLog(Map<String, String> param);
}
