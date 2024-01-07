import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialListComponent} from "./componentes/tutorial/tutorial-list/tutorial-list.component";
import {AddTutorialComponent} from "./componentes/tutorial/add-tutorial/add-tutorial.component";
import {TutorialDetailsComponent} from "./componentes/tutorial/tutorial-details/tutorial-details.component";

const routes: Routes = [
  {path: 'tareas', component: TutorialListComponent},
  {path: 'add_tarea', component: AddTutorialComponent},
  {path: 'tareas/:id', component: TutorialDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
