import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

import { TasksListModel, TaskModel } from './tasks-list.model'

@Component({
    selector: 'tasks-list',
    template: require('./tasks-list.component.html'),
    directives: []
})
export class TasksListComponent implements OnInit {
    public Model: TasksListModel;

    constructor(private router: Router) {
        this.Model = new TasksListModel();
    }

    get diagnostic() { return JSON.stringify(this.Model, null, 2); }

    ngOnInit() {
        let task = new TaskModel();
        task.name = "Test Task #1";
        this.Model.tasks.push(task);

        let task2 = new TaskModel();
        task2.name = "Test Task #2";
        this.Model.tasks.push(task2);
    }

    OnCancelClick() {
        this.router.navigate(['/']);
    }
}   