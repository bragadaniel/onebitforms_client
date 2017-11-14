import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { AnswersModule } from './answers/answers.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from './forms/forms.module';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'ng2-materialize';
import { UsersModule } from './users/users.module';

import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    AnswersModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartsModule,
    ColorPickerModule,
    FormsModule,
    MaterializeModule.forRoot(),
    RouterModule,
    routing,
    UsersModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
