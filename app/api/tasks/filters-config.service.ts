import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class FilterDefinitionDTO {
    name: string
    filter: FilterExpressionDTO
}

export class FilterExpressionDTO {
    expression: string
    parameters: FilterExpressionDTO[]
}

@Injectable()
export class FiltersConfigService {
    private serviceUrl = 'data/filters-config.json';  // URL to web api

    constructor(private http: Http) { }

    getFilters(): Promise<FilterDefinitionDTO[]> {
        return this.http.get(this.serviceUrl + '?t=' + new Date().getTime())
            .toPromise()
            .then(response => {
                let data = response.json().filters as FilterDefinitionDTO[];
                return data;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 