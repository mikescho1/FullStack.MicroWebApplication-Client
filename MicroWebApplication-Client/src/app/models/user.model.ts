export class User   {

    id: number;
    userName: string;
    password: string;
    email: string;
    activeStatus: number;
  
    constructor(id: number, userName: string, password: string, email: string, activeStatus: number)  {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.email = email;
      this.activeStatus = activeStatus;
    }
  
  }