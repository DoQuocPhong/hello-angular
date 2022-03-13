import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

//enums
import { Routing } from './enums/routing.enum'

//common
import { ButtonComponent } from './common/button/button.component';
import { DemoComponent } from './common/demo/demo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.Home,
    pathMatch: 'full'
  },
  {
    path: Routing.Home,
    component: HomeComponent
  },
  {
    path: Routing.User,
    component: UserComponent,
    loadChildren: () => {
      return import ("./user/user.module").then(function(u) {return u.UserModule})
    }
  },
  {
    path: Routing.Admin,
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //UserComponent,
    AdminComponent,
    ButtonComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
