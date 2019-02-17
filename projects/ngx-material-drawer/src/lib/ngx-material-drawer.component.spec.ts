import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialDrawerComponent } from './ngx-material-drawer.component';

describe('NgxMaterialDrawerComponent', () => {
  let component: NgxMaterialDrawerComponent;
  let fixture: ComponentFixture<NgxMaterialDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
