import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService=inject(AuthService)

  //private http=inject(HttpClient)

  loginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]),//valores k kedaran por defecto
    password: new FormControl("", Validators.required)//valores k kedaran por defecto
  })

  funIngresar(){


    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }


    )
    //alert("Ingresando...")
    
  }

}
