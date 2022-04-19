import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-private-clients-page',
  templateUrl: './private-clients-page.component.html',
  styleUrls: ['./private-clients-page.component.scss']
})
export class PrivateClientsPageComponent implements OnInit {
  // tarifsData: any = [
  //   {name: 'Nets 1', price: '99', text: 'Бесплатное IPTV в подарок на 1 месяц'},
  //   {name: 'Nets 2', price: '125', text: 'Бесплатное IPTV в подарок на 1 месяц'},
  //   {name: 'Nets 3', price: '225', text: 'Бесплатное IPTV в подарок на 3 месяц'},
  //   {name: 'Nets 4', price: '375', text: 'Бесплатное IPTV в подарок на 4 месяц'},
  // ]
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
