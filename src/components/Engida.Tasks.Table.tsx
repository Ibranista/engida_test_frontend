import React from 'react';
import { Table, Button, Select } from 'antd';
import { Task } from '../interface/tasks.interface';

const { Option } = Select;

interface TaskTableProps {
    tasks: Task[] | undefined;
    isLoading: boolean;
    onUpdate: (id: string, status: 'To Do' | 'In Progress' | 'Done') => void;
    onDelete: (id: string) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, isLoading, onUpdate, onDelete }) => {
    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        {
            title: 'Action',
            key: 'action',
            render: (_: unknown, record: Task) => (
                <div className="flex space-x-2">
                    <Select defaultValue={record.status} onChange={(value) => onUpdate(record.id, value)}>
                        <Option value="To Do">To Do</Option>
                        <Option value="In Progress">In Progress</Option>
                        <Option value="Done">Done</Option>
                    </Select>
                    <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
                </div>
            ),
        },
    ];

    return <Table columns={columns} dataSource={tasks} loading={isLoading} rowKey="id" className="mt-4" />;
};

export default TaskTable;
