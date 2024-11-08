package com.example.todo.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class ResponseHandler {

    public ResponseEntity<Object> generateSuccessResponse(String message, Object data, HttpStatus status) {
        Map<String, Object> response = new HashMap<>();
        
        response.put("message", message);
        response.put("data", data);
        response.put("success", true);
        response.put("statusCode", status.value());
        
        return new ResponseEntity<Object>(response, status);
    }

    public ResponseEntity<Object> generateErrorResponse(String message, HttpStatus status) {
        Map<String, Object> response = new HashMap<>();

        response.put("message", message);
        response.put("success", false);
        response.put("statusCode", status.value());

        return new ResponseEntity<Object>(response, status);
    }
}
