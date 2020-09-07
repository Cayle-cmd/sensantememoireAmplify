import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = ""
  pwd= ""
  successMessage= ""
  errorMessage = ""
  error : {name: string,message: string} = {name:'',message:''}

  constructor(private authservice: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  clearErrorMessage (){
    this.errorMessage=''
    this.error = {name:'',message:''}
  }
  register(){
    this.clearErrorMessage
    if(this.validateForm(this.email, this.pwd)){
        this.authservice.registerWithEmail(this.email,this.pwd).then(() => {
            this.successMessage= 'You are registred'
          //this.router.navigate(['/consutations'])
        }).catch((_error) => {
          this.error = _error
          this.router.navigate(["/register"])

        });
      }
    }

  validateForm(email,pwd){
    if(email.lenght === 0){
       this.errorMessage = "Please enter your email"
       return false;
    }
    if(pwd.lenght === 0){
      this.errorMessage = "Please enter your password";
      return false;
   }
   if(pwd.length < 8 ){
    this.errorMessage = "Password should be at least 8 characters";
    return false;
 }
  this.errorMessage = ''
  return true ;

  }


}
