import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OnceADayService {
  private signTimestampKey: string = "Timestamp";
  private postTimestampKey: string = "postTimestampKey";

  public canReadNewHorror(sign: string): boolean {
    let dateString = localStorage.getItem(this._constructSignKey(sign));
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

  public setHorrorReadTime(sign: string): void {
    let now = new Date().toISOString();
    localStorage.setItem(this._constructSignKey(sign), now);
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

  private _constructSignKey(sign: string): string {
    return (sign += this.signTimestampKey);
  }
}
