import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '../../node_modules/@angular/common/http';
import { query } from '@angular/animations';




@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getHeaders(){
    const token = localStorage.getItem('token')
    return token ? new HttpHeaders().set('Authorization',token) : null
  }

  get(link: string){
    return this.http.get(link, {headers: this.getHeaders() }).toPromise()
  }

  post(link: string,body ){
    return this.http.post(link, body, {headers: this.getHeaders() }).toPromise()
  }

  getquery(link: string,body ){
    return this.http.post(link, query, {headers: this.getHeaders() }).toPromise()
  }

}
