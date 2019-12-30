import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group( {
      email: '',
      userName: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(registerData) {
    console.log(registerData);
    this.userService.registerUser(registerData).subscribe(response => {
      console.log(response);
    }, error => console.log('Oh No!'));
  }

}