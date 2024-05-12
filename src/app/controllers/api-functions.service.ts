import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService <t> {

  constructor(@Inject(String) public url:string ,protected http:HttpClient) { }
    get() :Observable <t>{
      return this.http.get<t>(this.url);
    }
    getById(id:any) :Observable <t>{
      return this.http.get<t>(this.url + "/" + id);
    }
    post(obj:any):Observable <t>{
      return this.http.post<t>(this.url, obj);
    }
    put(id:any,obj:any):Observable <t>{
      return this.http.put<t>(this.url+"/"+id,obj);
  }

    delete(id:any):Observable <t>{
      return this.http.delete<t>(this.url + '/' + id);
  }
}
