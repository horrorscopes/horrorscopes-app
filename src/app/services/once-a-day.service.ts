import { Injectable } from "@angular/core";

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
      return this._hasBeenADay(dateString);
    }
  }

  public canPostNewHorror(): boolean {
    let dateString = localStorage.getItem(this.postTimestampKey);
    if (dateString == undefined || dateString == null) {
      return true;
    } else {
      return this._hasBeenADay(dateString);
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

  private _hasBeenADay(date: string): boolean {
    const lastReadDate = new Date(date);
    const today = new Date();
    let lastRead =
      lastReadDate.getFullYear() +
      lastReadDate.getMonth() +
      lastReadDate.getDate();
    let now = today.getFullYear() + today.getMonth() + today.getDate();
    return now != lastRead;
  }
}
