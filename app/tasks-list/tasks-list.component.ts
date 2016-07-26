import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { FilterBoxComponent } from './filter-box.component'
import { TasksService } from '../api/tasks/tasks.service'
import { FiltersConfigService } from '../api/tasks/filters-config.service'

import { Task, TaskColor, TaskStatus, TaskType } from './task.model'
import { TaskModelConverter } from './task.model.converter'
import { FilterConfigModel, FieldMetaInfo, UserInputType, EnumListMetaInfo } from './filter-config.model'
import { FilterConfigModelConverter } from './filter-config.model.converter'
import { FilterBox } from './filter-box.model'

import { isNullOrEmptyArray, isNotEmptyArray } from '../shared/utils'

export class TasksListModel {
    tasks: Task[] = []
    filtersMeta: FieldMetaInfo[] = []
    filterBoxes: FilterBox[]
    filtersConfig: FilterConfigModel
}

@Component({
    selector: 'tasks-list',
    template: require('./tasks-list.component.html'),
    directives: [FilterBoxComponent],
    providers: [TasksService, FiltersConfigService]
})
export class TasksListComponent implements OnInit {
    public Model: TasksListModel;

    constructor(private router: Router,
        private tasksService: TasksService,
        private configService: FiltersConfigService) {

        this.Model = new TasksListModel();
        this.Model.filtersMeta.push(new EnumListMetaInfo("Status", "status", TaskModelConverter.taskStatusEnumConverter));
        this.Model.filtersMeta.push(new EnumListMetaInfo("Type", "type", TaskModelConverter.taskTypeEnumConverter));
        this.Model.filtersMeta.push(new EnumListMetaInfo("Color", "color", TaskModelConverter.taskColorEnumConverter));
    }

    get diagnostic() { return JSON.stringify(this.Model, null, 2); }

    ngOnInit() {
        this.tasksService.getTasks().then(taskDTOs => {
            let tasks = taskDTOs.map(x => TaskModelConverter.BuildFromDTO(x));
            this.Model.tasks = tasks;
        });

        this.configService.getFilters().then(filtersDto => {
            this.Model.filterBoxes = filtersDto.map(x => {
                let filterNode = FilterConfigModelConverter.BuildFilterNode(x.filter);
                let filterBox = new FilterBox(x.name, filterNode, this.Model.filtersMeta);
                return filterBox;
            });
        });
    }

    onCancelClick() {
        this.router.navigate(['/']);
    }

    get tasksToDisplay(): Task[] {
        let filterFunction = (task: Task): boolean => {
            if (isNotEmptyArray(this.Model.filterBoxes)) {
                let filterFunctions = this.Model.filterBoxes.map(box => box.filterFunction).filter(f => f != null);
                if (filterFunctions.length > 0) {
                    return filterFunctions.every(f => f(task));
                }
                return true;
            } else {
                return true;
            }
        };

        return this.Model.tasks.filter(filterFunction);
    }

    filterBoxChanged(filterBox: FilterBox): void {
        console.log('filterBoxChanged', filterBox.name);
    }
}   