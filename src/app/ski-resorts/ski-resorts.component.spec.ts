import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkiResortsComponent } from './ski-resorts.component';

describe('SkiResortsComponent', () => {
  let component: SkiResortsComponent;
  let fixture: ComponentFixture<SkiResortsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiResortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
