import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user :any
  constructor() { 
    this.user = {
      name : 'abc',
      title : 'abc title',
      address: 'abc address',
      phone : [
        '123-456-789',
        '789-456-123'
      ]
    }
  }

  ngOnInit() {
  }

}
