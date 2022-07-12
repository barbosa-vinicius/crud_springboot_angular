import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusersFormComponent } from './musers/musers-form/musers-form.component';
import { MusersListComponent } from './musers/musers-list/musers-list.component';
import { MusersRoutingModule } from './musers/musers-routing.module';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
