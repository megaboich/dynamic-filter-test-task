import { Task, TaskColor, TaskStatus, TaskType, TasksListModel } from './tasks-list.model'
import { TaskDefinitionDTO } from '../api/tasks/tasks.service'
import * as moment from 'moment'

export class TaskConverter {
    static taskColorMapping = {
        default: TaskColor.blue,
        "Blue": TaskColor.blue,
        "Purple": TaskColor.blue,
        "Black": TaskColor.black,
    }

    static taskStatusMapping = {
        default: TaskStatus.open,
        "Open": TaskStatus.open,
        "In Progress": TaskStatus.inProgress,
        "Closed": TaskStatus.closed,
    }

    static taskTypeMapping = {
        default: TaskType.maintenance,
        "Maintenance": TaskType.maintenance,
        "Installation": TaskType.installation,
        "Failure": TaskType.failure,
    }

    static convertEnum<T>(value: string, mapping: any): T {
        let converted = mapping[value];
        if (!converted) {
            converted = mapping.default;
        }
        return converted as T;
    }

    static BuildFromDTO(taskDTO: TaskDefinitionDTO): Task {
        let task = new Task();
        task.id = taskDTO.Id;
        task.name = taskDTO.Name;
        task.description = taskDTO.Description;
        task.startDate = moment(taskDTO.StartDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.endDate = moment(taskDTO.EndDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.color = this.convertEnum<TaskColor>(taskDTO.Color, this.taskColorMapping);
        task.status = this.convertEnum<TaskStatus>(taskDTO.Status, this.taskStatusMapping);
        task.type = this.convertEnum<TaskType>(taskDTO.Type, this.taskTypeMapping);
        return task;
    }
} 