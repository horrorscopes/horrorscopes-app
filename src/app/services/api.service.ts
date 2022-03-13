import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  public getHorror(sign: string): Observable<any> {
    const url: string =
      "https://us-central1-my-horrorscopes.cloudfunctions.net/get-data?sign=" +
      sign;
    return this._http.get<any>(url);
  }

  public putData(submission): Observable<any> {
    const url: string =
      "https://us-central1-my-horrorscopes.cloudfunctions.net/put-data";
    const headers: HttpHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    ); //.set('Access-Control-Allow-Origin', '*');
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this._http.post<any>(url, submission, httpOptions);
  }
}
