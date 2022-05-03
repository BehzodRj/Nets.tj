import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacancy-special',
  templateUrl: './vacancy-special.component.html',
  styleUrls: ['./vacancy-special.component.scss']
})
export class VacancySpecialComponent implements OnInit {
  vacancyAddForm!:FormGroup
  letterAddForm!: FormGroup

  modalShow = false
  constructor() { }

  ngOnInit(): void {
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
  }

  send(){
    const vacancyAddFormData = {...this.vacancyAddForm.value}
    console.log(vacancyAddFormData)
    const letterAddFormData = {...this.letterAddForm.value}
    console.log(letterAddFormData)
  }

}