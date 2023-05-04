import { CUSTOM_ELEMENTS_SCHEMA, forwardRef, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/es";
import localeDeExtra from "@angular/common/locales/extra/es";

registerLocaleData(localeDe, "es", localeDeExtra);

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    exports: [],
    providers: [{ provide: LOCALE_ID, useValue: "es-Es" }]
})
export class DashboardModule { }