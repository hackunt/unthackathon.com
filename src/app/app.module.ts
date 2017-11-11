import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { appRoutes } from './app.routing';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { RegisterComponent } from './register/register.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TwitchComponent } from './twitch/twitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    FaqComponent,
    ContactComponent,
    SponsorComponent,
    RegisterComponent,
    CountdownComponent,
    TwitchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
