import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { CreateTaskRequest } from '../interface/tasks.interface';

const { Option } = Select;

interface TaskFormProps {
    isVisible: boolean;
    onClose: () => void;
    onSubmit: (values: CreateTaskRequest) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ isVisible, onClose, onSubmit }) => {
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values);
            form.resetFields();
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    return (
        <Modal title="Create Task" open={isVisible} onOk={handleOk} onCancel={onClose}>
            <Form form={form} layout="vertical">
                <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please select the status!' }]}>
                    <Select>
                        <Option value="To Do">To Do</Option>
                        <Option value="In Progress">In Progress</Option>
                        <Option value="Done">Done</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TaskForm;
