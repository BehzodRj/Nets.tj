import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-special',
  templateUrl: './vacancy-special.component.html',
  styleUrls: ['./vacancy-special.component.scss']
})
export class VacancySpecialComponent implements OnInit {
  vacancySpecialData: any = [
    {id: 1, img: './assets/img/vacancy.svg', title: 'Специалист по подключениям'},
    {id: 2, img: './assets/img/manager.svg', title: 'Менеджер В2В'},
    {id: 3, img: './assets/img/operator.svg', title: 'Оператор'}
  ]
  fullVacancyData: any
  vacancyAddForm!:FormGroup
  letterAddForm!: FormGroup
  modalShow = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.vacancyAddForm = new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dadname: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
    this.letterAddForm = new FormGroup({
      letter: new FormControl('',Validators.required)
    })

    this.route.params.subscribe( (param: any) => {
      this.fullVacancyData = this.vacancySpecialData.filter( (res: any) => res.id == param.id)[0]
    })
  }

  send(){
    const vacancyAddFormData = {...this.vacancyAddForm.value}
    console.log(vacancyAddFormData)
    const letterAddFormData = {...this.letterAddForm.value}
    console.log(letterAddFormData)
  }

}