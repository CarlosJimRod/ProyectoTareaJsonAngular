import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../../services/tutorial.service";
import {Tarea} from "../../../models/tarea";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tareas$: Observable<Tarea[]>
  tareaSelected: Tarea

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit() {
    this.tareas$ = this.tutorialService.getTareas()
  }

  tareaDetail(tarea: Tarea) {
    this.tareaSelected = tarea
  }

}
