import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/chat`, { message });
  }
}
