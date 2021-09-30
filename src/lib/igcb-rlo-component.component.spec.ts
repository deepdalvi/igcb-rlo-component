import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgcbRloComponentComponent } from './igcb-rlo-component.component';

describe('IgcbRloComponentComponent', () => {
  let component: IgcbRloComponentComponent;
  let fixture: ComponentFixture<IgcbRloComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgcbRloComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgcbRloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
