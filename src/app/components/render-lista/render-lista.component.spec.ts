import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderListaComponent } from './render-lista.component';

describe('RenderListaComponent', () => {
  let component: RenderListaComponent;
  let fixture: ComponentFixture<RenderListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
