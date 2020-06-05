import { Component, EventEmitter, ElementRef, Output, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-submit-fate',
  templateUrl: './submit-fate.component.html',
  styleUrls: ['./submit-fate.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class SubmitFateComponent implements OnInit {

  public showForm: boolean = false;

  public signs: string[] = [
    'capricorn',
    'aquarius',
    'pisces',
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius'
  ];

  public value: string = '';

  public fateFormControl: FormControl = new FormControl('');

  public signFormControl: FormControl = new FormControl('');

  public secondFormControl: FormControl = new FormControl('');

  @ViewChild('textInput', {static: false}) inputRef: ElementRef;

  @ViewChild('signSelect', {static: false}) signRef: ElementRef;

  @Output() public submission: EventEmitter<object> = new EventEmitter<object>()

  constructor() { }

  ngOnInit() {
  }

  public submit(): void {
    console.dir('submit')
  }

  public onSubmit(): void {
    console.dir('onSubmit')
  }

  public onEnter(): void {
    if (!this.secondFormControl.value && this.fateFormControl.value && this.signFormControl.value) {
      this.submission.emit({
        fate: this.fateFormControl.value,
        signs: this.signFormControl.value,
      });
      this.fateFormControl.setValue(null);
      this.signFormControl.setValue(null);
    }
  }

  public onShowForm() {
    this.showForm = true;
  }
}
