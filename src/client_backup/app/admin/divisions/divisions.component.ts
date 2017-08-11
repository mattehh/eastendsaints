import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../admin.service';

@Component({
    moduleId: module.id,
    selector: 'ees-admin-divisions',
    templateUrl: 'divisions.component.html',
    styleUrls: ['divisions.component.css'],
})
export class DivisionsComponent implements OnInit {
    form: FormGroup;
    divisions = [{ name: 'Senior', seasons: 10 }, { name: 'Double-X', seasons: 5 }];

    constructor(private fb: FormBuilder, private adminService: AdminService) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            'name': ['', Validators.required]
        });
    }

    submitForm() {
        console.log(this.form.controls.name);
        this.adminService.addDivision(this.form.value).subscribe(result => {
            console.log("Success!");
        });
    }
}
