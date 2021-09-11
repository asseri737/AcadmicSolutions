import { ChatbotComponent } from './chatbot/chatbot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PreferComponent } from './prefer/prefer.component';

const routes: Routes = [{ path: 'login-component', component: LoginComponent },
{ path: 'prefer-component', component: PreferComponent },
{ path: 'chatbot-component', component: ChatbotComponent},
{ path: '',   redirectTo: '/login-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
