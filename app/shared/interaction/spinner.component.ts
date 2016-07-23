import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

import './spinner.component.css';

@Component({
    selector: 'spinner',
    'template': `<div *ngIf="active" class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>`
})
export class SpinnerComponent {
    public active: boolean;

    public constructor(spinner: SpinnerService) {
        spinner.status.subscribe((status: boolean) => {
            this.active = status;
        });
    }
}