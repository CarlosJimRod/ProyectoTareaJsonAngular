import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TutorialListDetailComponent} from './tutorial-list-detail.component';

describe('TutorialListDetailComponent', () => {
  let component: TutorialListDetailComponent;
  let fixture: ComponentFixture<TutorialListDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialListDetailComponent]
    });
    fixture = TestBed.createComponent(TutorialListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
