import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  message: string
  rendezvous: string
  nom: string
  prenom: string
  age : number
  email : string
  tel: number


    constructor(public db: DbService) { }

    ngOnInit(): void {
    }
    Record(){
      let data = {};
      data['nom'] = this.nom
      data['prenom'] = this.prenom
      data['age'] = this.age
      data['email'] = this.email
      data['tel'] = this.tel


      this.db.RvRegister(data).then(res => {
          this.nom = ""
          this.prenom=""
          this.age = undefined
          this.email=""
          this.tel= undefined


          alert(this.message="Done")


      }).catch(err => {
         alert(err)
      });


    }

}
