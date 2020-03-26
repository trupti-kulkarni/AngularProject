import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFeedbakFormComponent } from './user-feedbak-form/user-feedbak-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Shared/auth.guard';


const appRoutes : Routes=[
  
    { path : 'userDetails/:id', component: UserDetailsComponent ,canActivate:[AuthGuard]}, 
    {path : 'userTable', component: UserTableComponent, canActivate:[AuthGuard]},
    { path :'UserFeedbackForm', component: UserFeedbakFormComponent, canActivate:[AuthGuard]},
    {path:'login', component:LoginComponent},
    { path : '' , redirectTo: '/login',pathMatch:'full'},
    { path: '**', redirectTo:'/login' },
   ]

   @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}