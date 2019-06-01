import { SettingsContactComponentComponent } from './settings-contact-component/settings-contact-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'settings', component: SettingsComponent,
    children: [
      {
        path: 'contacts', component: SettingsContactComponentComponent
      },
      {
        path: '', redirectTo: 'contacts', pathMatch: 'full'
      }
      ]
  },
    { path: '**', component: PageNotFoundComponent }
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
