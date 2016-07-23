import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class TaskDefinitionDTO {
    Id: string
    Name: string
    Status: "Open" | "In Progress" | "Closed"
    Type: "Installation" | "Maintenance" | "Failure"
    StartDate: string //22-04-2016 13:00:00",
    EndDate: string //22-04-2016 14:00:00",
    Color: "Blue" | "Purple" | "Black" //"Red",
    Description: string //"Install new KoelKast SF-123"
}

@Injectable()
export class TasksService {
    private serviceUrl = 'data/tasks.json';  // URL to web api

    constructor(private http: Http) { }

    getTasks(): Promise<TaskDefinitionDTO[]> {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => {
                let data = response.json() as TaskDefinitionDTO[];
                return data;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 