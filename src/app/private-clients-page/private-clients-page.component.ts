import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-clients-page',
  templateUrl: './private-clients-page.component.html',
  styleUrls: ['./private-clients-page.component.scss']
})
export class PrivateClientsPageComponent implements OnInit {
  tarifsData: any = [
    {id: 1, name: 'Nets 1', speed: 'Скорость до 1 Mbit/s', price: '99', li_1: 'Оборудование в аренду', li_2: 'Бесплатное IPTV в подарок на 1 месяц', li_3: 'Бесплатное подключение', li_4: 'Безлимитный трафик', li_5: 'Доступ к локальным ресурсам до 100мбит'},
    {id: 2, name: 'Nets 2', speed: 'Скорость до 5 Mbit/s', price: '125', li_1: 'Оборудование в аренду', li_2: 'Бесплатное IPTV в подарок на 1 месяц', li_3: 'Бесплатное подключение', li_4: 'Безлимитный трафик', li_5: 'Доступ к локальным ресурсам до 100мбит'},
    {id: 3, name: 'Nets 3', speed: 'Скорость до 10 Mbit/s', price: '225', li_1: 'Оборудование в аренду', li_2: 'Бесплатное IPTV в подарок на 2 месяц', li_3: 'Бесплатное подключение', li_4: 'Безлимитный трафик', li_5: 'Доступ к локальным ресурсам до 100мбит'},
    {id: 4, name: 'Nets 4', speed: 'Скорость до 20 Mbit/s', price: '375', li_1: 'Оборудование в аренду', li_2: 'Бесплатное IPTV в подарок на 2 месяц', li_3: 'Бесплатное подключение', li_4: 'Безлимитный трафик', li_5: 'Доступ к локальным ресурсам до 100мбит'},
  ]
  tarifsName: any
  showModalConnection = false
  clrTech = 0

  constructor() {}

  ngOnInit() {}

  connectionTarifs(id: number) {
    this.showModalConnection = true
    this.tarifsName = this.tarifsData.filter( (res: any) =>  res.id == id)[0].name
  }

  gpon(elem: any) {
    this.clrTech = 1
    console.log(elem.target.value); 
  }

  ethernet(elem: any) {
    this.clrTech = 2
  }

  antenna(elem: any) {
    this.clrTech = 3
  }

}
