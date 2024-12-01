import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup;
  public person = {
    gender: 'F',
    wantNotifications:false,
  }

  constructor(
    private fb:FormBuilder,
  ){
    this.myForm = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [ true, Validators.required ],
      termsAndConditions: [ false, Validators.requiredTrue ],

    })
  }

  ngOnInit(): void {
      this.myForm.reset
  }

  isValidField( field:string ):boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  //ngSubmit()

  onSave(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value)

    console.log(this.person)
  }


}
