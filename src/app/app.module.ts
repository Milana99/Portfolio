import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstPageComponent } from './core/first-page/first-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecoundPageComponent } from './core/secound-page/secound-page.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ThirdPageComponent } from './core/third-page/third-page.component';
import { FourthPageComponent } from './core/fourth-page/fourth-page.component';
import { FifthPageComponent } from './core/fifth-page/fifth-page.component';
import { FooterComponent } from './core/footer/footer.component';
import { CardComponent } from './core/secound-page/card/card.component';
import { CardItemComponent } from './core/secound-page/card/card-item/card-item.component';
import { RangeComponent } from './core/third-page/range/range.component';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from './core/fourth-page/project-card/project-card.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
    declarations: [
        AppComponent,
        FirstPageComponent,
        SecoundPageComponent,
        NavBarComponent,
        ThirdPageComponent,
        FourthPageComponent,
        FifthPageComponent,
        FooterComponent,
        CardComponent,
        CardItemComponent,
        RangeComponent,
        ProjectCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
