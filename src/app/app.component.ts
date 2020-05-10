import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Client {
  id: string;
  fname: string;
  lname: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ContactsOrganiser';
  contacts = [];

  constructor(private http: HttpClient) {
    this.http.get<Array<Client>>('http://localhost:3000/contacts/getall').subscribe(data => {
      this.contacts = data;
    });
  }

  settings = {
    columns: {
      fname: {
        title: 'First Name'
      },
      lname: {
        title: 'Last Name'
      },
      phone: {
        title: 'Phone'
      },
      email: {
        title: 'Email'
      }
    }
  };

}
