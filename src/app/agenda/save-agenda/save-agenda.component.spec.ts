import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAgendaComponent } from './save-agenda.component';

describe('SaveAgendaComponent', () => {
  let component: SaveAgendaComponent;
  let fixture: ComponentFixture<SaveAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveAgendaComponent]
    });
    fixture = TestBed.createComponent(SaveAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
