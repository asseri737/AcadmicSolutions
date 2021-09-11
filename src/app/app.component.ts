import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';



  constructor(private db: AngularFirestore, public auth: AngularFireAuth) {

    const users= db.collection('Students').get;
    console.log(users);
    
       }
}


