import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { TasksService } from '../api/tasks/tasks.service'
import { FiltersConfigService } from '../api/tasks/filters-config.service'

import { Task, TaskColor, TaskStatus, TaskType } from './task.model'
import { TaskConverter } from './task.model.converter'
import { FilterConfigModel, FilterMetaInfo, FilterUserInputType, EnumListFilterMetaInfo } from './filter-config.model'
import { FilterConfigModelConverter } from './filter-config.model.converter'
import { FilterBox } from './filter-box.model'

import { isNullOrEmptyArray } from '../shared/utils'

export class TasksListModel {
    tasks: Task[] = []
    filtersMeta: FilterMetaInfo[] = []
    filterBoxes: FilterBox[]
    filtersConfig: FilterConfigModel
    filterFunction: (task: Task) => boolean
}

@Component({
    selector: 'tasks-list',
    template: require('./tasks-list.component.html'),
    directives: [],
    providers: [TasksService, FiltersConfigService]
})
export class TasksListComponent implements OnInit {
    public Model: TasksListModel;

    constructor(private router: Router,
        private tasksService: TasksService,
        private configService: FiltersConfigService) {

        this.Model = new TasksListModel();
        this.Model.filtersMeta.push(new EnumListFilterMetaInfo("Status", "status", TaskConverter.taskStatusDisplayMapping, TaskConverter.taskStatusMapping));
        this.Model.filtersMeta.push(new EnumListFilterMetaInfo("Type", "type", TaskConverter.taskTypeDisplayMapping, TaskConverter.taskTypeMapping));
        this.Model.filtersMeta.push(new EnumListFilterMetaInfo("Color", "color", TaskConverter.taskColorDisplayMapping, TaskConverter.taskColorMapping));
    }

    get diagnostic() { return JSON.stringify(this.Model, null, 2); }

    ngOnInit() {
        this.tasksService.getTasks().then(taskDTOs => {
            let tasks = taskDTOs.map(x => TaskConverter.BuildFromDTO(x));
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
        if (this.Model.filterFunction) {
            return this.Model.tasks.filter(this.Model.filterFunction);
        }
        else {
            return this.Model.tasks;
        }
    }

    toggleFilterBox(filterBox: FilterBox): void {
        console.log('clicked', filterBox.name);

        if (isNullOrEmptyArray(filterBox.interactions)
            && !filterBox.activated) {
            // we just can apply filter
            filterBox.activated = true;
            this.Model.filterFunction = filterBox.getFilterFunction();
            return;
        }

        if (filterBox.activated) {
            filterBox.activated = false;
            this.Model.filterFunction = null;
        }
    }
}   