import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FateCacheService {
  private fateKey: string = "fateKey";

  public getCachedFate(): string | null {
    let fate = localStorage.getItem(this.fateKey);
    return fate;
  }

  public setCachedFate(fate: string): void {
    localStorage.setItem(this.fateKey, fate);
  }
}
