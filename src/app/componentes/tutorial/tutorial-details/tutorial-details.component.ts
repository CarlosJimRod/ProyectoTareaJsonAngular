import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TutorialService} from "../../../services/tutorial.service";
import {Tarea} from "../../../models/tarea";

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  numTarea: number
  tareas: Tarea[]
  tarea: Tarea

  constructor(private route: ActivatedRoute, private tutorialService: TutorialService) {
  }

  ngOnInit() {
    this.numTarea = this.route.snapshot.params['id']
    this.tutorialService.getTareas().subscribe(tareas => {
      this.tareas = tareas
      for (let tarea of this.tareas) {
        if (tarea.id == this.numTarea) {
          this.tarea = tarea
        }
      }
    })
  }

  delete() {
    this.tutorialService.deleteTarea(this.numTarea)
  }

  update() {
    this.tutorialService.modifyTarea(this.numTarea, this.tarea)
  }
}
