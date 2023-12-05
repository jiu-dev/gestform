import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NumbersListComponent } from './numbers-list.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [NumbersListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    CardModule,
    MessagesModule,
  ],
  exports: [NumbersListComponent],
})
export class NumberListModule {}
