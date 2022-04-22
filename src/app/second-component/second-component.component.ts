import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  
  user:User={
    profilePicture:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    name:"Vibin Gowtham A",
    experience:5,
    company:"Presidio",
    specialization:"Full-Stack-Developer",
    frontendFramework:"Angular",
    backendFramework:"Spring",
    city:"Chennai"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
