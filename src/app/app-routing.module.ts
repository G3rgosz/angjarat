import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclestableComponent } from './vehiclestable/vehiclestable.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'vehiclestable', component: VehiclestableComponent},
  {path:'vehicles', component: VehiclesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
