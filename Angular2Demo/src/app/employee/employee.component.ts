import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute } from '@angular/router'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent implements OnInit {
    statusMessage: string;

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeesByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'EMPLOYEE NOT FOUND!!!';
                } else {
                    this.employee = employeeData
                }               
            }
        );
    }
    employee: IEmployee;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute) {

    }


}