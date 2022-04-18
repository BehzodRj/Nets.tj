import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-private-clients-page',
  templateUrl: './private-clients-page.component.html',
  styleUrls: ['./private-clients-page.component.scss']
})
export class PrivateClientsPageComponent implements OnInit {
  showModalConnection = false
  clrTech = 0

  constructor() { }

  ngOnInit() {}

  gpon(elem: any) {
    this.clrTech = 1
  }

  ethernet(elem: any) {
    this.clrTech = 2
  }

  antenna(elem: any) {
    this.clrTech = 3
  }

}
