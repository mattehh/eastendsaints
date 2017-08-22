import { ReactiveFormsModule } from '@angular/forms';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminService } from '../admin.service';

import { SeasonsComponent } from './seasons.component';
import { SeasonsListComponent } from './seasons-list.component';
import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Admin - Seasons component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, RouterTestingModule],
        declarations: [SeasonsComponent, SeasonsListComponent],
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
            let fixture = TestBed.createComponent(SeasonsComponent);
            let compInstance: SeasonsComponent = fixture.debugElement.componentInstance;
            let DOMEl = fixture.debugElement.nativeElement;
            let serviceInstance = fixture.debugElement.injector.get<any>(AdminService) as MockAdminService;

            let mockSubmission = {
              name: 'Test',
              division_id: 1,
              start_date: '2016-01-01',
              end_date: '2016-01-03'
            };

            spyOn(serviceInstance, 'addSeason').and.callThrough();

            fixture.detectChanges();

            expect(DOMEl.querySelectorAll('option').length).toBe(2);

            compInstance.form.patchValue(mockSubmission);
            serviceInstance.returnValue = [mockSubmission];
            compInstance.submitForm();
            
            expect(serviceInstance.addSeason).toHaveBeenCalledWith(mockSubmission);

            fixture.detectChanges();

            expect(compInstance.form.pristine).toBe(true);
            expect(DOMEl.querySelectorAll('tbody tr').length).toBe(1);
          });

      }));
  });
}

class MockAdminService {
  returnValue: any;

  addSeason(value: any): Observable<any> {
    return Observable.create((observer) => {
      observer.next();
      observer.complete();
    });
  }

  getDivisions(): Observable<any[]> {
    return Observable.create((observer) => {
      observer.next([{ id: 1, name: 'Test' }]);
      observer.complete();
    });
  }

  getSeasons(): Observable<any[]> {
    return Observable.create((observer) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
