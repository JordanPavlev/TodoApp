import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemDialogComponent } from './todo-item-dialog/todo-item-dialog.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoItemDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    DragDropModule,
    MatListModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
