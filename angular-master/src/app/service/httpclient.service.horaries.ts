import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class horaires{
  constructor(
    public numero:string,
    public origine:string,
    public designation:string,
    public reseau:string,
    public etat:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     gethoraires()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<horaires[]>('http://localhost:8080/horaires',{headers});
  }
  getHeaders(){
    let username='admin'
    let password='password'
  
    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }
}  