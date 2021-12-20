import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkipassComponent } from './skipass.component';

describe('SkipassComponent', () => {
  let component: SkipassComponent;
  let fixture: ComponentFixture<SkipassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
