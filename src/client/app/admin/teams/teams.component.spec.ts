import { ReactiveFormsModule } from '@angular/forms';
import {
  async,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminService } from '../admin.service';

import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list.component';
import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Admin - Teams component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, RouterTestingModule],
        declarations: [TeamsComponent, TeamsListComponent],
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
            let fixture = TestBed.createComponent(TeamsComponent);
            let compInstance: TeamsComponent = fixture.debugElement.componentInstance;
            let DOMEl = fixture.debugElement.nativeElement;
            let serviceInstance = fixture.debugElement.injector.get<any>(AdminService) as MockAdminService;

            let mockSubmission = {
              name: 'Test',
              season_id: 1,
              color: '#ff0000'
            };

            spyOn(serviceInstance, 'addTeam').and.callThrough();

            fixture.detectChanges();
            console.log(DOMEl.querySelectorAll('option'));
            expect(DOMEl.querySelectorAll('option').length).toBe(2);

            compInstance.form.patchValue(mockSubmission);
            serviceInstance.returnValue = [mockSubmission];
            compInstance.submitForm();

            expect(serviceInstance.addTeam).toHaveBeenCalledWith(mockSubmission);

            fixture.detectChanges();

            expect(compInstance.form.pristine).toBe(true);
            expect(DOMEl.querySelectorAll('tbody tr').length).toBe(1);
          });

      }));
  });
}

class MockAdminService {
  returnValue: any;

  addTeam(value: any): Observable<any> {
    return Observable.create((observer) => {
      observer.next();
      observer.complete();
    });
  }

  getSeasons(): Observable<any[]> {
    return Observable.create((observer) => {
      observer.next([{ id: 1, name: 'Test' }]);
      observer.complete();
    });
  }

  getTeams(): Observable<any[]> {
    return Observable.create((observer) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
