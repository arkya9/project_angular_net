import { MwinPipe } from './../../custom_pipe/mwin.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentComponent } from './child-component.component';

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent;
  let fixture: ComponentFixture<ChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponentComponent,MwinPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
