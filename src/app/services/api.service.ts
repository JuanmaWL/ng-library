import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postMedia(data : any){
    return this.http.post<any>("http://localhost:3000/mediaList/", data);
  }

  getMedia(){
    return this.http.get<any>("http://localhost:3000/mediaList/");
  }

  putMedia(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/mediaList/"+id, data);
  }

  deleteMedia(id : number){
    return this.http.delete<any>("http://localhost:3000/mediaList/"+id);
  }

}
