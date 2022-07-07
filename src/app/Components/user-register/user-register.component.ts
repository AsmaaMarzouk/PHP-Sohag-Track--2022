import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
// declare formGroup
usrFormGroup: FormGroup;
// formBuilder service
  constructor(private fb: FormBuilder) { 
    // this.usrFormGroup=new FormGroup({
    //   fullName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   email:new FormControl(''),
    //   mobileNo:new FormControl(''),
    //   password:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl(''),
    //   })

    // });


    this.usrFormGroup=this.fb.group({
      fullName:['',[Validators.required, Validators.minLength(3)]],
      email:[''],
      mobileNo:fb.array([fb.control('')]),
      address:this.fb.group({
        city:[''],
        street:[''],
      }),
      password:[''],
    })
  }

  // convert fullName to property
  get fullName(){
    return this.usrFormGroup.get('fullName');
  }

  get mobileNo(){
    return this.usrFormGroup.get('mobileNo') as FormArray;
  }
  addMobile(){
    this.mobileNo.push(this.fb.control(''));

  }

  ngOnInit(): void {
  }

  // resgister(){

  // }

}
