import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FateCacheService {
  private signFateKey: string = "Fate";

  public getCachedFate(sign: string): string | null {
    let fate = localStorage.getItem(this._constructSignKey(sign));
    return fate;
  }

  public setCachedFate(fate: string, sign: string): void {
    localStorage.setItem(this._constructSignKey(sign), fate);
  }

  private _constructSignKey(sign: string): string {
    return (sign += this.signFateKey);
  }
}
