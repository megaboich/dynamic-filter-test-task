export enum TaskStatus {
    open,
    inProgress,
    closed
}

export enum TaskType {
    installation,
    maintenance,
    failure
}

export enum TaskColor {
    blue,
    purple,
    black
}

export class Task {
    id: string
    name: string
    status: TaskStatus
    type: TaskType
    color: TaskColor
    startDate: Date
    endDate: Date
    description: string
}

export class TasksListModel {
    tasks: Task[] = []
}