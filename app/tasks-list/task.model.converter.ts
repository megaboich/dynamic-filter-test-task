import { Task, TaskColor, TaskStatus, TaskType } from './task.model'
import { TaskDefinitionDTO } from '../api/tasks/tasks.service'
import * as moment from 'moment'
import { EnumConverter, EnumDisplayMapping } from '../shared/enum.converter'


export class TaskConverter {
    static taskColorMapping = {
        default: TaskColor.blue,
        "Blue": TaskColor.blue,
        "Purple": TaskColor.purple,
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


    static taskStatusDisplayMapping: EnumDisplayMapping[] = [{
        enumValue: TaskStatus.open,
        displayName: "Open"
    }, {
            enumValue: TaskStatus.closed,
            displayName: "Closed"
        }, {
            enumValue: TaskStatus.inProgress,
            displayName: "In Progress"
        }];

    static taskTypeDisplayMapping: EnumDisplayMapping[] =
    [{
        enumValue: TaskType.installation,
        displayName: "Installation"
    }, {
            enumValue: TaskType.maintenance,
            displayName: "Maintenance"
        }, {
            enumValue: TaskType.failure,
            displayName: "Failure"
        }]

    static taskColorDisplayMapping: EnumDisplayMapping[] =
    [{
        enumValue: TaskColor.blue,
        displayName: "Blue"
    }, {
            enumValue: TaskColor.purple,
            displayName: "Purple"
        }, {
            enumValue: TaskColor.black,
            displayName: "Black"
        }]

    static BuildFromDTO(taskDTO: TaskDefinitionDTO): Task {
        let task = new Task();
        task.id = taskDTO.Id;
        task.name = taskDTO.Name;
        task.description = taskDTO.Description;
        task.startDate = moment(taskDTO.StartDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.endDate = moment(taskDTO.EndDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.color = EnumConverter.convertStringToEnum(taskDTO.Color, this.taskColorMapping);
        task.status = EnumConverter.convertStringToEnum(taskDTO.Status, this.taskStatusMapping);
        task.type = EnumConverter.convertStringToEnum(taskDTO.Type, this.taskTypeMapping);

        task.statusText = EnumConverter.convertToDisplayValue(task.status, TaskConverter.taskStatusDisplayMapping);
        task.typeText = EnumConverter.convertToDisplayValue(task.type, TaskConverter.taskTypeDisplayMapping);
        task.colorText = EnumConverter.convertToDisplayValue(task.color, TaskConverter.taskColorDisplayMapping);

        return task;
    }
} 