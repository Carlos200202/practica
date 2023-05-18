import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  ngOnInit(): void {

  }

  number: number = 1;
  increment(){
    this.number += 1
  }
  decrement(){
    this.number--
  }

}
