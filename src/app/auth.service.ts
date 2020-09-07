import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authstate: any = null;
  constructor(private afa: AngularFireAuth,private router:Router) {

    this.afa.authState.subscribe(auth => {
      this.authstate = auth ;
    })
   }
   registerWithEmail(email:string,pwd:string){
     return this.afa.createUserWithEmailAndPassword(email,pwd).then((user)=>{
      this.authstate = user

      }).catch(error=>{
          console.log(error)
          throw error
      });

   }
   loginWithEmail(email:string,pwd:string){
     return this.afa.signInWithEmailAndPassword(email,pwd).then((user)=>{
      this.authstate = user

      }).catch(error=>{
          console.log(error)
          throw error
      });
   }
   get isUserAnonymousLoggedIn(): boolean{
     return (this.authstate !== null ) ? this.authstate.isAnonymous: false
   }
   get currentUserId(): string{
      return (this.authstate != null) ? this.authstate.uid:''
   }
   get currentUserName(): string{
    return this.authstate['email']
 }
 get currentUser(): any{
  return (this.authstate != null) ? this.authstate: null

}
get isUserEmailLoggedIn(): boolean {
  if((this.authstate !== null) && (!this.isUserAnonymousLoggedIn)){
    return true
  }
  else{
    return false
  }
}

   signout(){
     this.afa.signOut();
     this.router.navigate(['/login'])
   }
}
