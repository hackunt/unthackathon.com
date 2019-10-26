import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountDown } from 'ng2-date-countdown';

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
import { ScheduleComponent } from './schedule/schedule.component';
import { InformationComponent } from './information/information.component';
import { DescriptionComponent } from './description/description.component';
import { DevcountdownComponent } from './devcountdown/devcountdown.component';
import { MlhComponent } from './mlh/mlh.component';
import { RSVPComponent } from './rsvpcomponent/rsvpcomponent.component';
import { AboutComponent } from './about/about.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LogoComponent } from './logo/logo.component';
import { Sponsors2019Component } from './sponsors2019/sponsors2019.component';
import { MailchimpFormComponent } from './mailchimp-form/mailchimp-form.component';

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
    TwitchComponent,
    CountDown,
    ScheduleComponent,
    InformationComponent,
    DescriptionComponent,
    DevcountdownComponent,
    MlhComponent,
    RSVPComponent,
    AboutComponent,
    LogoComponent,
    Sponsors2019Component,
    MailchimpFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
