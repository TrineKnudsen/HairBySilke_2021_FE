import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)},
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module')
    .then(m => m.BookingModule)},

  {path: 'treatments',
  loadChildren: () => import('./treatments/treatments.module')
    .then(m => m.TreatmentsModule)},

  {path: 'about',
  loadChildren: () => import('./about/about.module')
    .then(m => m.AboutModule)},

  {path: 'auth',
  loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
