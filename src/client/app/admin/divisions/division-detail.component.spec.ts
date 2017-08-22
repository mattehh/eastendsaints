import { ActivatedRoute } from '@angular/router';
import {
  async,
  TestBed
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { ActivatedRouteStub } from '../../../testing/router-stubs';

import { DivisionDetailComponent } from './division-detail.component';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs/Observable';

export function main() {
  describe('Admin - DivisionDetail component', () => {

    beforeEach(() => {
      let activatedRoute = new ActivatedRouteStub();
      activatedRoute.testParamMap = { id: 1 };
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [DivisionDetailComponent],
        providers: [
          { provide: AdminService, useValue: new MockAdminService() },
          { provide: ActivatedRoute, useValue: activatedRoute }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DivisionDetailComponent);
            let compInstance: DivisionDetailComponent = fixture.debugElement.componentInstance;
            let DOMEl = fixture.debugElement.nativeElement;
            let serviceInstance = fixture.debugElement.injector.get<any>(AdminService) as MockAdminService;

            spyOn(serviceInstance, 'getDivision').and.callThrough();

            let mockDivision = { name: 'Test' };
            serviceInstance.returnValue = mockDivision;

            fixture.detectChanges();

            expect(serviceInstance.getDivision).toHaveBeenCalledWith(1);
            expect(DOMEl.querySelector('h3').innerText).toBe(mockDivision.name);
          });

      }));
  });
}

class MockAdminService {
  returnValue: any;

  getDivision(id: number) {
    return Observable.of(this.returnValue);
  }
}
