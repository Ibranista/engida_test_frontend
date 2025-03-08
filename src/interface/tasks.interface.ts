export interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
}

export interface UpdateTaskRequest {
  id: string;
  status: "To Do" | "In Progress" | "Done";
}
