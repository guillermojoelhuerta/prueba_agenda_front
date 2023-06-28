import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAgendaComponent } from './get-agenda.component';

describe('GetAgendaComponent', () => {
  let component: GetAgendaComponent;
  let fixture: ComponentFixture<GetAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAgendaComponent]
    });
    fixture = TestBed.createComponent(GetAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
