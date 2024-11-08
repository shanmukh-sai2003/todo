package com.example.todo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Entity
public class Task {
    @Id
    @GeneratedValue
    private int id;
    private String task;
    private String description;
    private Date deadline;
    private boolean completed;

    public Task() {

    }
    public Task(int id, String task, String description, Date deadline, boolean completed) {
        this.id = id;
        this.task = task;
        this.description = description;
        this.deadline = deadline;
        this.completed = completed;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", task='" + task + "'" +
                ", description='" + description + "'" +
                ", deadline=" + deadline +
                ", completed=" + completed +
                '}';
    }
}
