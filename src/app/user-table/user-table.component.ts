import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../Shared/User';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetUserService } from '../Shared/get-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users : User[];
  dataSource : any;
  isError : boolean=false;
  paginator: MatPaginator = null;
  isSmallScreen: boolean=false;
  displayedColumns=['Name','UserName','Email','Company Name','Address','Phone','Website'];

  // @ViewChild(MatPaginator, {static:true}) paginator : MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor( private getUser: GetUserService, private router : Router){}

  ngOnInit(){
    
    this.getUser.fetchUsers()
    .subscribe(
    (data)=>{
      this.users = <User[]> data;
     this.dataSource = new MatTableDataSource<User> (this.users);
     console.log(this.users);   
    },
  //   (error)=>{
  //     console.log(error);
      
  //  }
  )
  }
   
  setDataSourceAttributes(){
    if(this.dataSource)
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(event){
    
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    

  }
  loadUserInfo(row){
    
    //console.log(row);
    //this.getUser.activeIndexLink.next(0);
    this.getUser.addActiveLinkIndex(0);
    this.router.navigate(['/userDetails/'+row.id] )
  }

}
