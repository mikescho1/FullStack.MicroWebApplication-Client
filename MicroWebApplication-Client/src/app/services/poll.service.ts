import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PollService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  // TODO need to add crud methods.

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}