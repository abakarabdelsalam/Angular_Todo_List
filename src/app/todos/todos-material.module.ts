import { NgModule } from "@angular/core";

const MaterielModule: any[] = [

];

@NgModule({
    imports: [
        ...MaterielModule
    ],
    exports: [
        ...MaterielModule
    ]
})

export class TodosMaterialModule {}