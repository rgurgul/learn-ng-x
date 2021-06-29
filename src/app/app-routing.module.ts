import { ProfileComponent } from './features/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';
import { WorkersComponent } from './features/workers/workers.component';
import { ItemsComponent } from './features/items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsDetailsComponent } from './features/items/items-details/items-details.component';

const routes: Routes = [
  {
    path: 'items', component: ItemsComponent, children: [
      { path: ':id', component: ItemsDetailsComponent }
    ]
  },
  { path: 'workers', component: WorkersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
