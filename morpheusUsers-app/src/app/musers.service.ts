import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MUser } from './musers/muser';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MusersService {
    constructor(private httpClient: HttpClient) {}

    save(muser: MUser): Observable<MUser> {
        return this.httpClient.post<MUser>(
            'http://localhost:8080/api/musers',
            muser
        );
    }

    getMusers(): Observable<MUser[]> {
        return this.httpClient.get<MUser[]>('http://localhost:8080/api/musers');
    }
}
