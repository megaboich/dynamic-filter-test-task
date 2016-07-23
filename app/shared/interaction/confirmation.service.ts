import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class ConfirmationService {
    public confirm(text: string): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            let result = window.confirm(text);
            if (result) {
                resolve(true);
            } else {
                reject();
            }
        });
        return promise;
    }
}