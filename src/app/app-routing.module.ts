import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLayoutComponent } from './components/game-layout/game-layout.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: GameLayoutComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
