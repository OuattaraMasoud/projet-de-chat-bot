import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  queryFormGroup!: FormGroup;
  messages = [

  ];
  responses: any[] = []; // Tableau pour stocker les réponses

  result: any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, public authService: AuthService) { }

  ngOnInit() {
    this.queryFormGroup = this.fb.group({
      query: this.fb.control("")
    });
  }

  handleValider() {
    let url = "https://api.openai.com/v1/chat/completions";
    let httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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");

    this.messages.push({
      role: 'user', content: this.queryFormGroup.value.query
    });

    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    };

    this.httpClient.post(url, payload, { headers: httpHeaders })
      .subscribe({
        next: (resp) => {
          this.result = resp;
          this.responses.push({
            role: 'bot',
            content: this.result.choices[0].message.content
          });

          // Effacer le champ de saisie après envoi
          this.queryFormGroup.get('query')?.reset();
      },
      error:(err)=>{

      }
    })
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

