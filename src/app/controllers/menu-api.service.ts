import { Injectable } from '@angular/core';
import { ApiFunctionsService } from './api-functions.service';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../modules/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuApiService extends ApiFunctionsService<Menu> {

  constructor(protected override http:HttpClient) {
    super("http://localhost:3000/menu" ,http)
  }
}
