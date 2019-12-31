import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  private currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = userService.getCurrentUser();
  }

  ngOnInit() {
  }

}