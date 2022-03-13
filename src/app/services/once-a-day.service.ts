import { Injectable } from "@angular/core";
import { last } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OnceADayService {
  private getTimestampKey: string = "getTimestampKey";
  private postTimestampKey: string = "postTimestampKey";

  public canReadNewHorror(): boolean {
    let dateString = localStorage.getItem(this.getTimestampKey);
    if (dateString == undefined || dateString == null) {
      return true;
    } else {
      return this._hasBeenLessThan24h(dateString);
    }
  }

  public canPostNewHorror(): boolean {
    let dateString = localStorage.getItem(this.postTimestampKey);
    if (dateString == undefined || dateString == null) {
      return true;
    } else {
      return this._hasBeenLessThan24h(dateString);
    }
  }

  public setHorrorReadTime(): void {
    let now = new Date().toISOString();
    localStorage.setItem(this.getTimestampKey, now);
  }

  public setHorrorPostTime(): void {
    let now = new Date().toISOString();
    localStorage.setItem(this.postTimestampKey, now);
  }

  private _hasBeenLessThan24h(date: string): boolean {
    let lastRead = new Date(date).getTime();
    let now = new Date().getTime();
    return (now - lastRead) / 3600 / 1000 > 24;
  }
}
