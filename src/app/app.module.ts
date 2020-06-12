import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignPickerComponent } from './components/sign-picker/sign-picker.component';
import { SubmitFateComponent, AboutDialog } from './components/submit-fate/submit-fate.component';
import { HorrorscopeDisplayComponent } from './components/horrorscope-display/horrorscope-display.component';
import { ApiService } from './services/api.service';

@NgModule({
  entryComponents: [
    AboutDialog,
  ],
  declarations: [
    AppComponent,
    AboutDialog,
    HorrorscopeDisplayComponent,
    SignPickerComponent,
    SubmitFateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
