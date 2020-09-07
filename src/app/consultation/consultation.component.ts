import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
message: string
consultations: string
nom: string
prenom: string
age : number
email : string
tension: number
temperature : number
symptome: string

  constructor(public db: DbService) { }

  ngOnInit(): void {
  }
  Record(){
    let data = {};
    data['nom'] = this.nom
    data['prenom'] = this.prenom
    data['age'] = this.age
    data['email'] = this.email
    data['tension'] = this.tension
    data['temperature'] = this.temperature
    data['symptome'] = this.symptome

    this.db.consultationRegister(data).then(res => {
        this.nom = ""
        this.prenom=""
        this.age = undefined
        this.email=""
        this.tension= undefined
        this.temperature= undefined

        alert(res)
        this.message="Consultation saved"

    }).catch(err => {
       alert(err)
    });


  }

}
