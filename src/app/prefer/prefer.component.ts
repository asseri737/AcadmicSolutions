import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prefer',
  templateUrl: './prefer.component.html',
  styleUrls: ['./prefer.component.css']
})
export class PreferComponent implements OnInit {
  [x: string]: any;

  constructor( private router : Router, public auth: AngularFireAuth) {

    
   }

  ngOnInit(): void {
  }


  
bot() {
  this.router.navigateByUrl('/chatbot-component');
}

signOut(){
  this.afA.auth.signOut().then(() => {
    this.router.navigateByUrl('/login-component'); });
}
}
