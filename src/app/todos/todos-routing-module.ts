import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import * as fromContainers from './containers';
import * as fromComponents from './components';



const routes: Routes = [
    {
        path: '',
        component: fromContainers.TodosComponent
    },
    {
        path: '',
        component: fromComponents.TodosComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule {}