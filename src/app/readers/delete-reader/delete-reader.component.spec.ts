import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReaderComponent } from './delete-reader.component';

describe('DeleteReaderComponent', () => {
  let component: DeleteReaderComponent;
  let fixture: ComponentFixture<DeleteReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
