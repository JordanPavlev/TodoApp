import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDialogComponent } from './todo-item-dialog.component';

describe('TodoItemDialogComponent', () => {
  let component: TodoItemDialogComponent;
  let fixture: ComponentFixture<TodoItemDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemDialogComponent]
    });
    fixture = TestBed.createComponent(TodoItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
