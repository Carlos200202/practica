import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormComponent } from './components/form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    FormComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
