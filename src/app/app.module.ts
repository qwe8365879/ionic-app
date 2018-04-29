import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BlogPage } from "../pages/blog/blog";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { AuthLoginProvider } from '../providers/auth-login/auth-login';
import { BlogProvider } from '../providers/blog/blog';
import { SanitizeHtmlPipe, RemoveHtmlPipe } from "../pipe/sanitize-html-pipe";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BlogPage,
    SanitizeHtmlPipe,
    RemoveHtmlPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BlogPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthLoginProvider,
    BlogProvider
  ]
})
export class AppModule {}
