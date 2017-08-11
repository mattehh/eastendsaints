import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Config } from '../shared/config/env.config';

import { Observable } from 'Rxjs';

import '../operators';

@Injectable()
export class AdminService {
    constructor(private http: Http) { }

    addDivision(value: any) {
        return this.http.post(Config.API + "api.php/division", value);
    }

    getDivision(id: number): Observable<any> {
        return this.http.get(Config.API + "api.php/division/1");
    }

    getDivisions(): any {
        return this.http.get(Config.API + "api.php/division?transform=1").map(res => res.json()['division']);
    }
}