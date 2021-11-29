import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module')
    .then(m => m.BookingModule)},

  {path: 'treatments',
  loadChildren: () => import('./treatments/treatments.module')
    .then(m => m.TreatmentsModule)},

  {path: 'about',
  loadChildren: () => import('./about/about.module')
    .then(m => m.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
