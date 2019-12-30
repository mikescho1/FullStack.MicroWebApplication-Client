import { User } from './user.model';
import { Chat } from './chat.model';


export class Message    {
  public id: number;
  public timeStamp: string;
  public messageBody: string;
  public sender: User;
  public destinationChat: Chat;

  constructor(id: number, timeStamp: string, messageBody: string, sender: User, destinationChat: Chat)    {
    this.id = id;
    this.timeStamp = timeStamp;
    this.messageBody = messageBody;
    this.sender = sender;
    this.destinationChat = destinationChat;
  }

}