import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.scss']
})
export class VacancyPageComponent implements OnInit {
  vacancyData: any = [
    {id: 1, img: './assets/img/vacancy.svg', title: 'Специалист по подключениям', description: 'Не просто специалист…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'},
    {id: 2, img: './assets/img/manager.svg', title: 'Менеджер В2В', description: 'Осуществляет активные продажи, поиск новых клиентов В2В сегмента, процесс продвижение новых услуг для юридических лиц.'},
    {id: 3, img: './assets/img/operator.svg', title: 'Оператор', description: 'Не просто оператор…а Мега-коммуникабельный, активный, способный уладить любую проблему супер-герой!'}
  ]

  constructor() {}

  ngOnInit() {}

}
