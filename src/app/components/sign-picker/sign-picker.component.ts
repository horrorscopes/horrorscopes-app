import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ElementRef,
  ViewRef,
  ViewChild,
} from "@angular/core";
import CircleType from "circletype";

@Component({
  selector: "app-sign-picker",
  templateUrl: "./sign-picker.component.html",
  styleUrls: ["./sign-picker.component.scss"],
})
export class SignPickerComponent implements OnInit {
  @Output() public onSelection = new EventEmitter<string>();
  // @ViewChild("signNames", null) public signRing: ElementRef;

  constructor() {}

  public ngOnInit(): void {
    const circle = new CircleType(document.getElementById("signNames"));
    // const circle = new CircleType(this.signRing);
    circle.radius(200);
  }

  public selected(sign: string): void {
    console.dir(sign);
    this.onSelection.emit(sign);
  }
}
