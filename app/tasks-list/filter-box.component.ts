import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';

import { Task, TaskColor, TaskStatus, TaskType } from './task.model'
import { TaskModelConverter } from './task.model.converter'
import { FilterConfigModel, FieldMetaInfo, UserInputType, EnumListMetaInfo } from './filter-config.model'
import { FilterConfigModelConverter } from './filter-config.model.converter'
import { FilterBox } from './filter-box.model'

import { isNullOrEmptyArray } from '../shared/utils'

@Component({
    selector: 'filter-box',
    template: require('./filter-box.component.html'),
    directives: [],
    providers: []
})
export class FilterBoxComponent {
    @Input() filterBox: FilterBox
    @Output() filterChanged = new EventEmitter<FilterBox>()

    constructor() {
    }

    toggleFilterBox(): void {
        console.log('toggleFilterBox', this.filterBox.name);

        if (isNullOrEmptyArray(this.filterBox.interactions)) {
            if (!this.filterBox.filterApplied) {
                this.applyFilterBox();
            } else {
                this.resetFilterBox();
            }
            return;
        }
        else {
            this.filterBox.userInputActivated = !this.filterBox.userInputActivated;
        }
    }

    applyFilterBox(): void {
        this.filterBox.initFilterFunction();
        if (this.filterBox.hasEmptyInteractions) {
            return;
        }
        this.filterBox.filterApplied = true;
        this.filterBox.userInputActivated = false;
        this.filterChanged.emit(this.filterBox);
    }

    resetFilterBox(): void {
        this.filterBox.resetFilterFuntion();
        this.filterBox.filterApplied = false;
        this.filterBox.userInputActivated = false;
        this.filterChanged.emit(this.filterBox);
    }

    closeFilterBox(): void {
        this.filterBox.userInputActivated = false;
    }
}   