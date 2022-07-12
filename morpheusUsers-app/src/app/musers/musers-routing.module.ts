import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusersFormComponent } from './musers-form/musers-form.component';
import { MusersListComponent } from './musers-list/musers-list.component';

const routes: Routes = [
    { path: 'cadastro', component: MusersFormComponent },
    { path: '', component: MusersListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MusersRoutingModule {}
