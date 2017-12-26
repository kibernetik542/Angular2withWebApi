import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }


    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:60724/api/employees")
            .map((response: Response) => <IEmployee[]>response.json());            
    }

    getEmployeesByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:60724/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json());
    }
   
}