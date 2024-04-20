import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BackendServiceService } from '../../../service/server/backend-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reqister',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,JsonPipe,ReqisterComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './reqister.component.html',
  styleUrl: './reqister.component.scss'
})
export class ReqisterComponent {
  userform: FormGroup;

  constructor(private backendServiceService: BackendServiceService, private toster: ToastrService, fb: FormBuilder, private router: Router) {
    this.userform = fb.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9@!#$%^&*_-]{8,}$/)]]
    })
  }

  signupUser() {
    console.log('clicked', this.userform.value);



    this.backendServiceService.signUp(this.userform.value).subscribe({
      next: (response) => {
        console.log(response);
        this.toster.success(response.message, 'Success');
        this.userform.reset()
        this.router.navigate(['/login'])
      },
      error: (error) => {
        this.toster.error(error.error.message, 'Error');
        console.error(error);
      }

    });


  }

}
