import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-todo-item-dialog',
  templateUrl: './todo-item-dialog.component.html',
  styleUrls: ['./todo-item-dialog.component.scss']
})
export class TodoItemDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  datePipe: DatePipe = new DatePipe('en-US');

   formattedDeadline = this.datePipe.transform(this.data.deadline, 'fullDate');

   formattedCreatedAt = this.datePipe.transform(this.data.createdAt, 'fullDate');
}
