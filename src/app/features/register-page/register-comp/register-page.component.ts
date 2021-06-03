import { RegisterServiceService } from './../../../shared/services/register-services/register-service.service';
import { Iregister } from './../register-model/iregister';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparePassword } from '../custom-validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean=false;
  public user!: Iregister

  constructor(private fomrBuilder:FormBuilder, public registerService:RegisterServiceService) {
    this.registerForm = this.fomrBuilder.group({
      name:['', [Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      passwordRepeat:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      game:['',[Validators.required]],
      army:['',[Validators.required]]
    },
    {
      validator: comparePassword('password', 'passwordRepeat')
    });
  };

  ngOnInit(): void {};

  public onSubmit () {

    this.submitted=true;

    if(this.registerForm.valid){
      this.user = {
        name:this.registerForm.get('name')?.value,
        password:this.registerForm.get('password')?.value,
        passwordRepeat:this.registerForm.get('passwordRepeat')?.value,
        email:this.registerForm.get('email')?.value,
        phone:this.registerForm.get('phone')?.value,
        game:this.registerForm.get('game')?.value,
        army:this.registerForm.get('army')?.value
      };
      this.registerForm.reset();
	    this.submitted = false;
      this.registerService.postUser(this.user).subscribe((data)=>{
        console.log(data)
      })
    }
  }
}
