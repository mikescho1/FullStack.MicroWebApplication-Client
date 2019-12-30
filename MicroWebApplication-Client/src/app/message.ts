import { ChatComponent } from './components/chat/chat.component';

export class Message {
    messageId: number;
    timeStamp: string;
    messageBody: string;
    sender: User;
    destinationChat: Chat;

}