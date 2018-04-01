import { Routes } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { RegisterComponent } from './register/register.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InformationComponent } from './information/information.component';
import { DevcountdownComponent } from './devcountdown/devcountdown.component';
import { RSVPComponent } from './rsvpcomponent/rsvpcomponent.component';
// imports for different components

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sponsors', component: SponsorComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'livestream', component: TwitchComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'information', component: InformationComponent },
  { path: 'rsvp', component: RSVPComponent },
  // developer stuff, don't delete
  { path: 'dev', component: DevcountdownComponent },
  // Leave at the bottom
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
