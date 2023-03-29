import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeComponent,
    PageWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
