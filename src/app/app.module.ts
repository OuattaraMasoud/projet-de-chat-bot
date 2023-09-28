import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { ChatService } from './shared/services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChatBotComponent,
    EditProfilComponent,
    ChatHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireStorageModule,
    FormsModule,
     // Assurez-vous d'inclure FormsModule ici
    ReactiveFormsModule, // Si vous utilisez également ReactiveForms
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [AuthService,ChatService,],
  bootstrap: [AppComponent],
})

export class AppModule {}
