import {Component} from '@angular/core';
import {TutorialService} from "../../../services/tutorial.service";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  id = 6
  titulo: string
  fecha: string

  constructor(private tareaService: TutorialService) {
  }

  submit() {
    this.tareaService.setTarea({id: this.id, texto: this.titulo, fecha: this.fecha, hora: "00:00", recordatorio: true})
  }

}
