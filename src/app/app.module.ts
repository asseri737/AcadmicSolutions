import { environment } from './../environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { PreferComponent } from './prefer/prefer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatbotComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
