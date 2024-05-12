import { HttpClient } from '@angular/common/http';
import { ApiFunctionsService } from './api-functions.service';
import { Injectable } from '@angular/core';
import { Partners } from '../modules/Partners';

@Injectable({
  providedIn: 'root'
})
export class PartnersApiService extends ApiFunctionsService<Partners>{

  constructor(protected override http:HttpClient){
    super(' http://localhost:3000/partners',http);
  }
}
