import { Component } from '@angular/core';
import { BackendServiceService } from '../../../service/server/backend-service.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isAdmin() {
throw new Error('Method not implemented.');
}
  constructor(private auth:BackendServiceService,private toster:ToastrService) {
    
  }
  
  logout(): void {
    this.auth.logout()
    this.toster.success('Logout Successfully', 'Success')
  }
  
}
