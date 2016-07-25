import { Task, TaskColor, TaskStatus, TaskType } from './task.model'
import { TaskDefinitionDTO } from '../api/tasks/tasks.service'
import * as moment from 'moment'
import { EnumConverter, EnumDisplayMapping } from '../shared/enum.converter'


export class TaskConverter {
    static taskColorEnumConverter = new EnumConverter({
        "Blue": TaskColor.blue,
        "Purple": TaskColor.purple,
        "Black": TaskColor.black,
    }, [{ enumValue: TaskColor.blue, displayName: "Blue" },
            { enumValue: TaskColor.purple, displayName: "Purple" },
            { enumValue: TaskColor.black, displayName: "Black" }]);

    static taskStatusEnumConverter = new EnumConverter({
        "Open": TaskStatus.open,
        "In Progress": TaskStatus.inProgress,
        "Closed": TaskStatus.closed,
    }, [{ enumValue: TaskStatus.open, displayName: "Open" },
            { enumValue: TaskStatus.inProgress, displayName: "In Progress" },
            { enumValue: TaskStatus.closed, displayName: "Closed" }]);

    static taskTypeEnumConverter = new EnumConverter({
        "Maintenance": TaskType.maintenance,
        "Installation": TaskType.installation,
        "Failure": TaskType.failure,
    }, [{ enumValue: TaskType.installation, displayName: "Installation" },
            { enumValue: TaskType.maintenance, displayName: "Maintenance" },
            { enumValue: TaskType.failure, displayName: "Failure" }]);

    static BuildFromDTO(taskDTO: TaskDefinitionDTO): Task {
        let task = new Task();
        task.id = taskDTO.Id;
        task.name = taskDTO.Name;
        task.description = taskDTO.Description;
        task.startDate = moment(taskDTO.StartDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.endDate = moment(taskDTO.EndDate, 'YYYY-MM-DD HH:mm:ss').toDate();
        task.color = this.taskColorEnumConverter.convertStringToEnum(taskDTO.Color);
        task.status = this.taskStatusEnumConverter.convertStringToEnum(taskDTO.Status);
        task.type = this.taskTypeEnumConverter.convertStringToEnum(taskDTO.Type);
        task.colorText = this.taskColorEnumConverter.convertToDisplayValue(task.color);
        task.statusText = this.taskStatusEnumConverter.convertToDisplayValue(task.status);
        task.typeText = this.taskTypeEnumConverter.convertToDisplayValue(task.type);
        return task;
    }
} 