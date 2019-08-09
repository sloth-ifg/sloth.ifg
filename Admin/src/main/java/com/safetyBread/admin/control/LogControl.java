package com.safetyBread.admin.control;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.safetyBread.admin.model.Log;
import com.safetyBread.admin.service.LogService;
import com.safetyBread.admin.util.TextConverter;

@SuppressWarnings("unchecked")
@RestController
@RequestMapping("/logs")
public class LogControl {
	@Autowired
	private LogService service;
	
	@GetMapping("/{index}")
	public JSONObject logs(@PathVariable int index, @RequestParam(required = false) String id, @RequestParam(required = false) String user, @RequestParam(required = false) String skill,  @RequestParam(required = false) String message,  @RequestParam(required = false) String date) throws ParseException {
		JSONArray list = new JSONArray();
		JSONParser parser = new JSONParser();
		JSONObject result = new JSONObject();
		
		for (Log log : service.getLogs(index, id, skill, user, message, date)) {
			list.add(parser.parse(log.toString()));
		}
		
		result.put("list", list);
		result.put("total", service.getTotalCount(id, skill, user, message, date));
		
		return result;
	}
	
	@GetMapping(value = "/download")
	public @ResponseBody void download(HttpServletResponse response, @RequestParam(required = false) String id, @RequestParam(required = false) String user, @RequestParam(required = false) String skill,  @RequestParam(required = false) String message,  @RequestParam(required = false) String date) throws IOException {
		try(BufferedWriter writer = Files.newBufferedWriter(Paths.get("files/logs.csv"), Charset.forName("UTF-8"))) {
			writer.write(TextConverter.getLogTitle());
			
			for (Log log : service.getTotalLogs(id, skill, user, message, date)) {
				writer.write(TextConverter.convertLog(log));
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		response.setContentType("application/octer-stream");
        response.setHeader("Content-Transfer-Encoding", "binary;");
        response.setHeader("Content-Disposition", "attachment; filename=\"Logs.csv\"");
		
	    InputStream in = new FileInputStream("files/logs.csv");
	    
	    OutputStream out = response.getOutputStream();
	    
	    IOUtils.copy(in, out);
	    
	    out.flush();
	    out.close();
	}
	
	
}
