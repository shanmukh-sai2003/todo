package com.example.todo.services;

import com.example.todo.handler.ResponseHandler;
import com.example.todo.models.Task;
import com.example.todo.repository.TaskRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ResponseHandler handler;
    public TaskService(TaskRepository taskRepository, ResponseHandler handler) {

        this.taskRepository = taskRepository;
        this.handler = handler;
    }
    public ResponseEntity<Object> getTasks() {

        List<Task> tasks = taskRepository.findAll();
        if(tasks.isEmpty()) {
            return handler.generateErrorResponse("No tasks found", HttpStatus.NOT_FOUND);
        }

        return handler.generateSuccessResponse("tasks list fetched", tasks, HttpStatus.OK);
    }

    public ResponseEntity<Object> addTask(Task task) {

        Task newTask = taskRepository.save(task);
        return handler.generateSuccessResponse("added task to todo list", newTask, HttpStatus.CREATED);
    }

    public ResponseEntity<Object> getTaskById(int taskId) {

        Task task = taskRepository.findById(taskId).orElse(null);
        if(task == null) {
            return handler.generateErrorResponse("No task found with the id", HttpStatus.NOT_FOUND);
        }

        return handler.generateSuccessResponse("Task found with given id", task, HttpStatus.OK);
    }

    public ResponseEntity<Object> changeStatus(int taskId) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task == null) {
            return handler.generateErrorResponse("No task found with the id", HttpStatus.NOT_FOUND);
        }

        task.setCompleted(!task.isCompleted());
        taskRepository.save(task);
        return handler.generateSuccessResponse("Updated task status", task, HttpStatus.OK);

    }

    public ResponseEntity<Object> deleteTask(int taskId) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if(task == null) {
            return handler.generateErrorResponse("No such task found with Id", HttpStatus.NOT_FOUND);
        }

        taskRepository.deleteById(taskId);
        return handler.generateSuccessResponse("task deleted successfully", task, HttpStatus.OK);
    }

    public ResponseEntity<Object> updateTask(Task updateTask, int taskId) {
        Task task = taskRepository.findById(taskId).orElse(null);
        if(task == null) {
            return handler.generateErrorResponse("No such task with id", HttpStatus.NOT_FOUND);
        }
        
        updateTask.setId(taskId);
        taskRepository.save(updateTask);
        
        return handler.generateSuccessResponse("task updated successfully", updateTask, HttpStatus.OK);
    }
}
