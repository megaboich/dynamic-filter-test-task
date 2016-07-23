import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'Index',
    directives: [],
    template: `
    <ul>
        <li>
            <a href="javascript:void(0)" (click)="navigate('/tasks')">Tasks</a>            
        </li>
    </ul>
    <hr/>
    <ul>
        <li>
             <a href="tests.html">Unit tests</a>     
        </li>
    </ul>
    `,
})
export class IndexComponent {
    constructor(private router: Router) {
    }

    navigate(route: string) {
        this.router.navigate([route]);
    }
}   