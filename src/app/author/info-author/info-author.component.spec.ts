import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAuthorComponent } from './info-author.component';

describe('InfoAuthorComponent', () => {
  let component: InfoAuthorComponent;
  let fixture: ComponentFixture<InfoAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
