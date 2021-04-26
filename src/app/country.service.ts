import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(
      'https://restcountries.eu/rest/v2/all?fields=flag;name;alpha2Code;alpha3Code;nativeName;altSpellings;callingCodes'
    );
  }

  getCountry(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`);
  }
}
