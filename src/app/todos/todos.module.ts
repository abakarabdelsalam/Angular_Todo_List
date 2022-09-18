import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodosMaterialModule } from "./todos-material.module";
import { TodoRoutingModule } from "./todos-routing-module";

@NgModule({
    imports: [
        CommonModule,
        TodoRoutingModule,
        TodosMaterialModule
    ],
    declarations: [],
    providers: []
})

export class TodoModule {}