import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReaderComponent } from './show-reader.component';

describe('ShowReaderComponent', () => {
  let component: ShowReaderComponent;
  let fixture: ComponentFixture<ShowReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
