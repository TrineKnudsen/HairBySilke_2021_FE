import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from "@angular/material/select";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CustomerComponent } from './customer/customer.component';

import { AdminComponent } from './admin/admin/admin.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
