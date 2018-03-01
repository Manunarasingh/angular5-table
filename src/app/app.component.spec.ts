import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { DataService } from './service/service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule, HttpClientModule, TableModule, SliderModule, ButtonModule],
      providers: [DataService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as content 'Primng Table'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.content).toEqual('Primng Table');
  }));
});
