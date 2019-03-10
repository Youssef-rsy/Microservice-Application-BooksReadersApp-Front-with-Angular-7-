import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { retry } from 'rxjs/operators';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
