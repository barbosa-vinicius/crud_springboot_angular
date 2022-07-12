import { Component, OnInit } from '@angular/core';
import { MusersService } from '../../musers.service';
import { MUser } from '../muser';

@Component({
    selector: 'app-musers-form',
    templateUrl: './musers-form.component.html',
    styleUrls: ['./musers-form.component.css'],
})
export class MusersFormComponent implements OnInit {
    muser: MUser;
    success: boolean = false;
    errors: string[];

    constructor(private mUserService: MusersService) {
        this.muser = new MUser();
    }

    ngOnInit(): void {}

    onSubmit(): void {
        this.mUserService.save(this.muser).subscribe({
            next: response => {
                //o retorno do 'save' é um Observable, que possui o método 'subscribe' que será executado ao final da execução da requisição
                this.errors = [];
                this.success = true;
                this.muser = response;
            },
            error: errorResponse => {
                this.success = false;
                this.errors = errorResponse.error.errors;
            },
        });
    }
}
