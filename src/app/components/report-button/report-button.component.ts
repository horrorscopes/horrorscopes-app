import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "src/app/services/api.service";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "report-button",
  templateUrl: "./report-button.component.html",
  styleUrls: ["./report-button.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0,
        })
      ),
      transition("void <=> *", animate(1000)),
    ]),
  ],
})
export class ReportButtonComponent implements OnInit {
  @Input() public fate: string;

  constructor(private _apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit() {}

  public onReport(): void {
    const message = `Are you sure you want to report this submission?`;

    const dialogData = new ConfirmDialogModel("Report", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      dialogResult &&
        this._apiService.reportData({ fate: this.fate }).subscribe();
    });
  }
}
