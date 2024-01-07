import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tarea} from "../models/tarea";

const baseUrl ="http://localhost:5000/tareas"
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private httpClient: HttpClient) { }

  getTareas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(baseUrl)
  }

  setTarea(tarea:Tarea){
    this.httpClient.put(baseUrl,tarea)
  }

  deleteTarea(id:number){
    let url = `${baseUrl}/${id}`
    this.httpClient.delete(url)
  }

  modifyTarea(id: number, tarea: Tarea) {
    let url = `${baseUrl}/${id}`
    this.httpClient.put(url, tarea)
  }
}
