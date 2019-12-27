import { HttpClientModule } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import {Message} from "src/app/models/message.model";


@Injectable()
export class ChatService    {
    onMessageAdded = new EventEmitter<Message>();

    constructor(private http: HttpClientModule) {

    }

}