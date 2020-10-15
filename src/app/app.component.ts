import { Component } from '@angular/core';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { DecimalPipe } from '@angular/common';
// import { TmplAstBoundAttribute } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title= 'calculation';
  // rental : FormGroup;

  // installment : number;
  // format = '2.0-2';

  // constructor(private fb : FormBuilder ,private decimalPipe : DecimalPipe){}

  // ngOnInit(){

  //   this.rental = this.fb.group({
  //     amount: ['',[Validators.required]],
  //     rate: [''],
  //     duration: ['']
  //   })

  // }
  // get amount(){
  //   return this.rental.get('amount');
  // }
  // get rate(){
  //   return this.rental.get('rate');
  // }
  // get duration(){
  //   return this.rental.get('duration');
  // }

  // onSubmit(){

  //   const amount = this.amount.value;
  //   const rate = this.rate.value;
  //   const duration = this.duration.value;

  //   const result = (amount*rate/100)/duration;
  //   this.installment =  +(this.decimalPipe.transform(result , this.format));

  //   console.log(this.amount.value);

  // }


}
