package com.safetyBread.admin.control;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.safetyBread.admin.service.DashboardService;

@SuppressWarnings("unchecked")
@RestController
public class HomeControl {
	private String path = "";
	@Autowired
	private DashboardService service;
	
	@GetMapping("/")
	public String dashboard() {
		int[] lineData = {500, 400, 600, 510, 56, 550, 400};
		HashMap<String, Integer> doughnutData = new HashMap<String, Integer>();
		
		doughnutData.put("total", 1000);
		doughnutData.put("skill1", 450);
		doughnutData.put("skill2", 250);
		doughnutData.put("skill3", 300);
		
		JSONObject result = new JSONObject();
		
		result.put("week", lineData);
		result.put("user", doughnutData);
		result.put("logs", service.getRecentLogs());
		result.put("managers", service.getRecentLogs());
		
		return result.toString();
	}
	
	@PostMapping("/upload")
	public String upload(HttpServletResponse response, @RequestParam List<MultipartFile> files) {
		JSONObject result = new JSONObject();
		
		files.forEach(file -> {
			File upload = new File(path + file.getOriginalFilename());
			
			try {
				file.transferTo(upload);
				
				result.put("name", file.getOriginalFilename());
			} catch (IllegalStateException | IOException e) {
				try {
					response.sendError(HttpServletResponse.SC_NOT_FOUND, e.getMessage());
				} catch (IOException e1) {
					e1.printStackTrace();
				}
				
			}
		});
		
		return result.toString();
	}
	
	@GetMapping(value = "/img/{img}")
	public @ResponseBody void image(HttpServletResponse response, @PathVariable String img) throws IOException {
		response.setContentType("image/jpeg");
		
	    InputStream in = getClass().getResourceAsStream("/files/" + img);
	    
	    IOUtils.copy(in, response.getOutputStream());
	}
}
