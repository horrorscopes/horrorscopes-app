import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AboutDialog } from "../about-dialog/about-dialog.component";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
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
export class AboutComponent implements OnInit {
  constructor(public aboutDialog: MatDialog) {}

  ngOnInit() {}

  public onAbout(): void {
    const dialogRef = this.aboutDialog.open(AboutDialog);
  }
}
