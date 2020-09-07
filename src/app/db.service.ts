import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public fs: AngularFirestore) { }

  consultationRegister(data){
      return this.fs.collection("Consultations").add(data);

  }
  RvRegister(data){
    return this.fs.collection("Rv").add(data);

}
}
