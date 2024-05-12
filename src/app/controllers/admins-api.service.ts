import { HttpClient } from '@angular/common/http';
import { Admins } from '../modules/Admins';
import { ApiFunctionsService } from './api-functions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsApiService extends ApiFunctionsService<Admins>{

  constructor(public override http:HttpClient) {
    super("http://localhost:3000/admin" , http);
  }
}
