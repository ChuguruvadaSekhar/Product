import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './component/application/application.component';
import { TableComponent } from './component/table/table.component';
import { ProductDetails } from './component/stepper/stepper.component';

const routes: Routes = [
  // { path: 'table', component: TableComponent },
  // { path: 'application', component: ApplicationComponent },
  { path: 'table', component: TableComponent },

  { path: 'detail/:id', component: ProductDetails },

  { path: '', redirectTo: 'table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
