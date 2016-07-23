import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { TasksListModel, Task } from './tasks-list.model'
import { TaskConverter } from './tasks-list.model.converter'
import { TasksService } from '../api/tasks/tasks.service'

@Component({
    selector: 'tasks-list',
    template: require('./tasks-list.component.html'),
    directives: [],
    providers: [TasksService]
})
export class TasksListComponent implements OnInit {
    public Model: TasksListModel;

    constructor(private router: Router, private tasksService: TasksService) {
        this.Model = new TasksListModel();
    }

    get diagnostic() { return JSON.stringify(this.Model, null, 2); }

    ngOnInit() {
        this.tasksService.getTasks().then(taskDTOs => {
            let tasks = taskDTOs.map(x => TaskConverter.BuildFromDTO(x));
            this.Model.tasks = tasks;
        });
    }

    OnCancelClick() {
        this.router.navigate(['/']);
    }
}   