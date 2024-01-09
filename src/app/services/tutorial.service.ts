import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tarea} from "../models/tarea";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl = "http://localhost:5000/tareas"

  constructor(private httpClient: HttpClient) { }

  getTareas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(this.baseUrl)
  }

  setTarea(tarea:Tarea){
    this.httpClient.put(this.baseUrl, tarea)
  }

  deleteTarea(id:number){
    /*let url = `${this.baseUrl}/${id}`
    this.httpClient.delete(url)*/
    return this.httpClient.delete(this.baseUrl + "/" + id)
  }

  modifyTarea(id: number, tarea: Tarea) {
    let url = `${this.baseUrl}/${id}`
    this.httpClient.put(url, tarea)
  }
}
