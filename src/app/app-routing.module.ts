import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'detail/:id', component : HeroDetailComponent}

];

@NgModule({ //initializing the rooter
  imports: [RouterModule.forRoot(routes)], //supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [RouterModule]
})
export class AppRoutingModule { }
