import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenListComponent } from './pokelist.component';

describe('ItenListComponent', () => {
  let component: ItenListComponent;
  let fixture: ComponentFixture<ItenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
