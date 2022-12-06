import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  form2!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form2 = this.fb.group({
      heroInfo: this.fb.group({
        nome: this.fb.control(null, Validators.required),
        alterEgo: this.fb.control(null, Validators.required),
      }),
      nemico: this.fb.control('io'),
      poteri: this.fb.array([]),
      pianeta: this.fb.control('terra'),
      debolezza: this.fb.control('acqua'),
    });
  }
  getPowersF() {
    return (this.form2.get('poteri') as FormArray).controls;
  }

  addPowers() {
    const control = this.fb.control(null);
    (this.form2.get('poteri') as FormArray).push(control);
  }
  submit() {
    console.log(this.form2);
    console.log('Form 2 valido');
  }

}
