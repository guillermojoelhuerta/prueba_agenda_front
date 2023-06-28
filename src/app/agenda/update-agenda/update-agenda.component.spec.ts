import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgendaComponent } from './update-agenda.component';

describe('UpdateAgendaComponent', () => {
  let component: UpdateAgendaComponent;
  let fixture: ComponentFixture<UpdateAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAgendaComponent]
    });
    fixture = TestBed.createComponent(UpdateAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
