export class Chat   {
    public id: number;
    public chatName: string;
    public timeStamp: string;
  
  
    constructor(id: number, chatName: string, timeStamp: string) {
      this.id = id;
      this.chatName = chatName;
      this.timeStamp = timeStamp;
    }
  }