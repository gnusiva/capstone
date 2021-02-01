import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplerooComponent } from './sampleroo.component';

describe('SamplerooComponent', () => {
  let component: SamplerooComponent;
  let fixture: ComponentFixture<SamplerooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplerooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplerooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
