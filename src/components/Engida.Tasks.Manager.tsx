import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } from '../services/task.api';
import { CreateTaskRequest } from '../interface/tasks.interface';
import TaskTable from './Engida.Tasks.Table';
import TaskForm from './Engida.Tasks.Form';

const TaskManager: React.FC = () => {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const [createTask] = useCreateTaskMutation();
    const [updateTask] = useUpdateTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const hideModal = () => setIsModalVisible(false);

    const handleCreateTask = async (values: CreateTaskRequest) => {
        await createTask(values);
        hideModal();
    };

    const handleUpdateTask = async (id: string, status: 'To Do' | 'In Progress' | 'Done') => {
        await updateTask({ id, status });
    };

    const handleDeleteTask = async (id: string) => {
        await deleteTask(id);
    };

    return (
        <div className="p-4">
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>Add Task</Button>
            <TaskTable tasks={tasks} isLoading={isLoading} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
            <TaskForm isVisible={isModalVisible} onClose={hideModal} onSubmit={handleCreateTask} />
        </div>
    );
};

export default TaskManager;
