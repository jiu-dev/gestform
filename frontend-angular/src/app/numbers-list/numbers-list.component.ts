import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestformService } from '../gestform.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.scss'],
})
export class NumbersListComponent implements OnInit {
  numbersForm!: FormGroup;
  transformedNumbers: (string | number)[] = [];
  messages: Message[] | undefined;

  constructor(
    private gestformService: GestformService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.numbersForm = this.fb.group({
      numbers: this.fb.array([this.createNumberInput()]),
    });
  }

  get numbers(): FormArray {
    return this.numbersForm.get('numbers') as FormArray;
  }

  createNumberInput(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^-?\d+$/)]],
    });
  }

  addNumberInput(): void {
    this.numbers.push(this.createNumberInput());
  }

  removeNumberInput(index: number): void {
    this.numbers.removeAt(index);
  }

  onSubmit() {
    const numbersToTransform = this.numbers.value
      .map((numControl: any) => numControl.number)
      .map((string: string) => parseInt(string, 10))
      .filter((num: number) => !isNaN(num));

    this.getTransformedNumbers(numbersToTransform);
  }
  getTransformedNumbers(numbers: number[]) {
    this.gestformService.transformNumbers(numbers).subscribe(
      (data) => {
        this.messages = [];
        this.transformedNumbers = data;
      },
      (error) => {
        this.messages = [
          { severity: 'error', summary: 'Error', detail: error },
        ];
      }
    );
  }
}
