import { Component, OnInit } from '@angular/core';
import { MusersService } from 'src/app/musers.service';
import { MUser } from '../muser';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-musers-list',
    templateUrl: './musers-list.component.html',
    styleUrls: ['./musers-list.component.css'],
})
export class MusersListComponent implements OnInit {
    mUsers: MUser[] = [];
    error: boolean = false;

    displayedColumns: string[] = ['id', 'name', 'cpf', 'registrationDate'];
    dataSource: MatTableDataSource<MUser>;

    constructor(private mUserService: MusersService) {}

    ngOnInit(): void {
        this.mUserService.getMusers().subscribe({
            next: response => {
                this.error = false;
                this.mUsers = response;
                this.dataSource = new MatTableDataSource(this.mUsers);
            },
            error: responseError => {
                this.error = true;
            },
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
}
