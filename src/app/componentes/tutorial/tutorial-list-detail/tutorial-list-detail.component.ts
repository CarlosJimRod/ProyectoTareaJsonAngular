import {Component, Input} from '@angular/core';
import {Tarea} from "../../../models/tarea";

@Component({
  selector: 'app-tutorial-list-detail',
  templateUrl: './tutorial-list-detail.component.html',
  styleUrls: ['./tutorial-list-detail.component.css']
})
export class TutorialListDetailComponent {
  @Input() tarea?: Tarea
}
