import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstPageComponent } from './core/first-page/first-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecoundPageComponent } from './core/secound-page/secound-page.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ThirdPageComponent } from './core/third-page/third-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecoundPageComponent,
    NavBarComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
