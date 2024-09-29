import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { NestedTemplateComponent } from './nested-template/nested-template.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormFormBuilderComponent } from './reactive-form-form-builder/reactive-form-form-builder.component';
import { ReactiveFormValidationsComponent } from './reactive-form-validations/reactive-form-validations.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NestedTemplateComponent,
    RegistrationFormComponent,
    ReactiveFormsComponent,
    ReactiveFormFormBuilderComponent,
    ReactiveFormValidationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
