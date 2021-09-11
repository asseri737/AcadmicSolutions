import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email!: string;
password!: string;
  alertCtrl: any;
  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

 

login() {
  this.auth.signInWithEmailAndPassword(this.email,this.password).then((res) => {
    this.router.navigateByUrl('/prefer-component');
  }, async (error) => {
    let alert = await this.alertCtrl.create({
      header: 'Error',
      message: error.message,
      buttons: ['OK']
    });
    alert(error.message);
  })
 
  ;
}


}
