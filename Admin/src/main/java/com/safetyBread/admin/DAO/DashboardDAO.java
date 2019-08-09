package com.safetyBread.admin.DAO;

import java.util.List;

import com.safetyBread.admin.model.Log;
import com.safetyBread.admin.model.Manager;

public interface DashboardDAO {
	List<Log> selectLogs();
	List<Manager> selectManagers();
}
