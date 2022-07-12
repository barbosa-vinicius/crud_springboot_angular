import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusersRoutingModule } from './musers-routing.module';
import { MusersFormComponent } from './musers-form/musers-form.component';
import { MusersListComponent } from './musers-list/musers-list.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [MusersFormComponent, MusersListComponent],
    imports: [CommonModule, MusersRoutingModule, FormsModule, MatTableModule],
    exports: [MusersFormComponent, MusersListComponent, MusersRoutingModule],
})
export class MusersModule {}
