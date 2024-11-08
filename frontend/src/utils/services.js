import api from './api';

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response?.data;
    } catch (error) {
        console.log(error?.message);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}

export const changeStatus = async (taskId) => {
    try {
        const response = await api.patch(`/tasks/${taskId}/updateStatus`, {});
        return response?.data;
    } catch (error) {
        console.log(error);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}

export const addTask = async (body) => {
    try {
        const response = await api.post(`/tasks`, body);
        return response?.data;
    } catch (error) {
        console.log(error);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}

export const getTaskById = async (taskId) => {
    try {
        const response = await api.get(`/tasks/${taskId}`);
        return response?.data;
    } catch (error) {
        console.log(error);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}

export const updateTask = async (taskId, body) => {
    try {
        const response = await api.put(`/tasks/${taskId}`, body);
        return response?.data;
    } catch (error) {
        console.log(error);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}

export const deleteTask = async (taskId) => {
    try {
        const response = await api.delete(`/tasks/${taskId}`);
        return response?.data;
    } catch (error) {
        console.log(error);
        if(error?.response) {
            return error?.response?.data;
        }
    }
}