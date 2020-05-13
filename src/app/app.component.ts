import { Component, Sanitizer, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

interface Client {
  _id: string;
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
  contacts;
  url = 'http://localhost:3000/contacts';
  settings = {
    mode: 'inline',
    delete: {
      confirmDelete: true
    },
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    columns: {
      fname: {
        title: 'First Name',
        type: 'string'
      },
      lname: {
        title: 'Last Name',
        type: 'string'
      },
      phone: {
        title: 'Phone',
        type: 'string'
      },
      email: {
        title: 'Email',
        type: 'string'
      }
    }
  };

  constructor(private http: HttpClient, private sanitizer: Sanitizer) {
    this.http.get<Array<Client>>(this.url + '/getall').subscribe(data => {
      this.contacts = new LocalDataSource(data);
    });
  }

  onDelete(event) {
    // Need to confirm deletion
    event.confirm.resolve();

    this.http.delete<Client>(this.url + '/delete/' + event.data._id).subscribe();
  }

  onCreate(event) {
    // Need to confirm insert
    event.confirm.resolve();
    this.http.put<Client>(this.url + '/add', event.newData).subscribe();
  }

  onEdit(event) {
    // Need to confirm update
    event.confirm.resolve();
    this.http.post<Client>(this.url + '/update', event.newData).subscribe();
  }
}
