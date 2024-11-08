package com.example.todo.controllers;

import com.example.todo.models.Task;
import com.example.todo.services.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping("/tasks")
    public ResponseEntity<Object> getTasks() {
        return service.getTasks();
    }

    @GetMapping("/tasks/{taskId}")
    public ResponseEntity<Object> getTaskById(@PathVariable int taskId) {
        return service.getTaskById(taskId);
    }

    @PostMapping("/tasks")
    public ResponseEntity<Object> addTask(@RequestBody Task task) {
        return service.addTask(task);
    }

    @PatchMapping("/tasks/{taskId}/updateStatus")
    public ResponseEntity<Object> changeStatus(@PathVariable int taskId) {
        return service.changeStatus(taskId);
    }

    @DeleteMapping("/tasks/{taskId}")
    public ResponseEntity<Object> deleteStatus(@PathVariable int taskId) {
        return service.deleteTask(taskId);
    }

    @PutMapping("/tasks/{taskId}")
    public ResponseEntity<Object> updateTask(@RequestBody Task task, @PathVariable int taskId) {
        return service.updateTask(task, taskId);
    }
}