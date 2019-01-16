import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOfReaderComponent } from './books-of-reader.component';

describe('BooksOfReaderComponent', () => {
  let component: BooksOfReaderComponent;
  let fixture: ComponentFixture<BooksOfReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksOfReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksOfReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
