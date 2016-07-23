import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser'

import { SpinnerService } from './shared/interaction/spinner.service'
import { SpinnerComponent } from './shared/interaction/spinner.component'

@Component({
    selector: 'app-component',
    template: require('./app.component.html'),

    directives: [ROUTER_DIRECTIVES, SpinnerComponent],
    providers: [SpinnerService, Title]
})

export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() { }
}
