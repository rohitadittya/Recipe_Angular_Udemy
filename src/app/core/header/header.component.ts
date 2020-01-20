import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => { console.log(response); }
      );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
