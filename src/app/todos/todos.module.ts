import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodosMaterialModule } from "./todos-material.module";
import { TodoRoutingModule } from "./todos-routing-module";
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
    imports: [
        CommonModule,
        TodoRoutingModule,
        TodosMaterialModule
    ],
    declarations: [
        ...fromComponents.components,
        ...fromContainers.containers

    ],
    providers: []
})

export class TodoModule {}