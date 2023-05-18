import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  credentials = {
    name: '',
    password: ''
  }
  procesar(){
    console.log(this.credentials)
  }
}
