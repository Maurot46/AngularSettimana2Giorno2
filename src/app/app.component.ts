import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSettimana2Giorno2';

  constructor() {}

  ngOnInit() {
  }


  @ViewChild('form', { static: true }) form!: NgForm;

  heroForm = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }
  hero = {
    nome: '',
    alterEgo: '',
    superPotere: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }


  submit(form: NgForm) {
    console.log(form.value);
    this.hero.nome = this.heroForm.nome;
    this.hero.alterEgo = this.heroForm.alterEgo;
    this.hero.superPotere = this.heroForm.superPotere;
    this.hero.nemico = this.heroForm.nemico;
    this.hero.pianeta = this.heroForm.pianeta;
    this.hero.debolezza = this.heroForm.debolezza;
  }
}
