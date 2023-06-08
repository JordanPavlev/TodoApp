import { Component, Input } from '@angular/core';
import { Todo } from '../models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoItemDialogComponent } from '../todo-item-dialog/todo-item-dialog.component';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {


  @Input() todo?: Todo;

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(TodoItemDialogComponent, {
      data: this.todo
    });
  }


}
