import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { HospitalisationComponent } from './hospitalisation/hospitalisation.component'
import { RegisterComponent } from './register/register.component'
import { ProfilComponent } from './profil/profil.component'
const routes: Routes = [
  {path : 'login',component: LoginComponent },
  {path : 'profil',component: ProfilComponent },
  {path : 'consultations',component: ConsultationComponent },
  {path : 'rendez_vous',component: RendezVousComponent },
  {path : 'hospitalisations',component: HospitalisationComponent },
  {path : 'register',component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
