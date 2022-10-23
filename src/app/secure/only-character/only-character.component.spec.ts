import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyCharacterComponent } from './only-character.component';

describe('OnlyCharacterComponent', () => {
  let component: OnlyCharacterComponent;
  let fixture: ComponentFixture<OnlyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
