package com.safetyBread.admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safetyBread.admin.DAO.LogDAO;
import com.safetyBread.admin.model.Log;

@Service
public class LogService {
	@Autowired
	private LogDAO dao;

	public List<Log> getTotalLogs(String id, String skill, String user, String msg, String date) {
		Map<String, String> param = new HashMap<String, String>();

		param.put("id", id);
		param.put("skill", skill);
		param.put("user", user);
		param.put("msg", msg);
		param.put("date", date);
		
		return dao.totalLogs(param);
	}

	public List<Log> getLogs(String index, String id, String skill, String user, String msg, String date) {
		Map<String, String> param = new HashMap<String, String>();

		param.put("id", id);
		param.put("skill", skill);
		param.put("user", user);
		param.put("msg", msg);
		param.put("date", date);
		param.put("index", index);

		return dao.getLogs(param);
	}

	public long getTotalCount(String id, String skill, String user, String msg, String date) {
		Map<String, String> param = new HashMap<String, String>();

		param.put("id", id);
		param.put("skill", skill);
		param.put("user", user);
		param.put("msg", msg);
		param.put("date", date);

		return dao.getTotalCount(param).get("total");
	}

	public void logging(String skill, String user, String msg, String date) {
		Map<String, String> param = new HashMap<String, String>();

		param.put("skill", skill);
		param.put("user", user);
		param.put("msg", msg);
		param.put("date", date);

		dao.insertLog(param);
	}
}
