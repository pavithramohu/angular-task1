import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(
        private http: HttpClient
    ) { }

    getBooksDetails(name: string): Observable<any> {
      //  const a = this.http.get<any>('//openlibrary.org/books/OL17910702M.json');
        const a = this.http.get<any>('//openlibrary.org/search.json?q=the+lord+of+the+rings');
        console.log(a);
     //return this.http.get<any>('//openlibrary.org/books/OL17910702M.json');
     return this.http.get<any>('//openlibrary.org/search.json?q=' + name);
      }
}