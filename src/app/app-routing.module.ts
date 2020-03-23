import { UserDetailsComponent } from './user-details/user-details.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFeedbakFormComponent } from './user-feedbak-form/user-feedbak-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes : Routes=[
  
    { path : 'userDetails/:id', component: UserDetailsComponent },
   
    {path : 'userTable', component: UserTableComponent},
    { path :'UserFeedbackForm', component: UserFeedbakFormComponent},
    { path : '' , redirectTo: '/userTable',pathMatch:'full'},
    { path: '**', redirectTo:'/userTable' }
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