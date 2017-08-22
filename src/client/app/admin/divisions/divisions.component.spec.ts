import { ReactiveFormsModule } from '@angular/forms';
import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { AdminService } from '../admin.service';
import { DivisionsComponent } from './divisions.component';
import { DivisionsListComponent } from './divisions-list.component';
import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Admin - Divisions component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, RouterTestingModule],
        declarations: [DivisionsComponent, DivisionsListComponent],
        providers: [
          { provide: AdminService, useValue: new MockAdminService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DivisionsComponent);
            let compInstance = fixture.debugElement.componentInstance;
            let DOMEl = fixture.debugElement.nativeElement;
            let serviceInstance = fixture.debugElement.injector.get<any>(AdminService) as MockAdminService;

            spyOn(serviceInstance, 'addDivision').and.callThrough();

            fixture.detectChanges();

            expect(DOMEl.querySelectorAll('tbody tr').length).toBe(0);

            serviceInstance.returnValue = [{ name: 'Test', id: 1 }];
            compInstance.form.controls.name.setValue('Test');
            compInstance.submitForm();

            expect(serviceInstance.addDivision).toHaveBeenCalledWith({ 'name': 'Test' });

            fixture.detectChanges();

            expect(compInstance.form.pristine).toBe(true);
            expect(DOMEl.querySelectorAll('tbody tr').length).toBe(1);
          });

      }));
  });
}

class MockAdminService {

  returnValue: any[];

  addDivision(value: any): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next();
      observer.complete();
    });
  }

  getDivisions(): Observable<any[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
