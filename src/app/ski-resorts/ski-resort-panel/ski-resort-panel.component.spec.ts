import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkiResortPanelComponent } from './ski-resort-panel.component';

describe('SkiResortPanelComponent', () => {
  let component: SkiResortPanelComponent;
  let fixture: ComponentFixture<SkiResortPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiResortPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiResortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
