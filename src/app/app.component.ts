import { Component, EventEmitter, OnInit } from "@angular/core";

import { debounceTime, delay } from "rxjs/operators";

import { ApiService } from "./services/api.service";
import { OnceADayService } from "./services/once-a-day.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public horrorscope: string;
  public resultsArrived: boolean = false;
  public loading: boolean = false;

  constructor(
    private _apiService: ApiService,
    private _onceADayService: OnceADayService
  ) {}

  public ngOnInit(): void {}

  public newSelection(sign: string): void {
    if (!this._onceADayService.canReadNewHorror()) {
      return;
    }
    this.horrorscope = undefined;
    this.resultsArrived = false;
    this.loading = true;
    this._apiService
      .getHorror(sign)
      .pipe(delay(2000))
      .subscribe((h) => {
        this.horrorscope = h.fate;
        this.resultsArrived = true;
        this.loading = false;
        this._onceADayService.setHorrorReadTime();
      });
  }

  public onSubmit(submission: any): void {
    if (!this._onceADayService.canPostNewHorror()) {
      return;
    }
    this._apiService.putData(submission).subscribe((x) => {
      console.dir(x);
      this._onceADayService.setHorrorPostTime();
    });
  }

  public showSubmitForm(): boolean {
    return this._onceADayService.canPostNewHorror();
  }
}
