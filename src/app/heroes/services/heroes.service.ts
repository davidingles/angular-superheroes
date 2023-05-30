import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroe.interfaces';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ServiceHeroes {

    private baseUrl: string = environment.baseURL;

    constructor(private http: HttpClient) { }

    // ENDPOINT http
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }

    getHeroById(id: string): Observable<Hero | undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe
             (
                catchError(err => of(undefined))
            )
    }

    getSuggestions( query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
    }
    

}