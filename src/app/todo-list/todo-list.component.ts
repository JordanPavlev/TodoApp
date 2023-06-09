import { Component, ViewChild } from '@angular/core';
import { Section, Column, Todo } from '../models';
import { FormControl, Validators, FormGroup, AbstractControl  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatMenuTrigger } from '@angular/material/menu';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  todoForm: FormGroup;
  activeSectionId: number | null = null;
  defaultSections: Section[] = [
    {
      id: 1,
      name: 'Common',
      columns: [
        {
          id: 1,
          name: 'Todo',
          todos: [],
        },
        {
          id: 2,
          name: 'In Progress',
          todos: [],
        },
        {
          id: 3,
          name: 'Done',
          todos: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Home',
      columns: [
        {
          id: 1,
          name: 'Todo',
          todos: [],
        },
        {
          id: 2,
          name: 'In Progress',
          todos: [],
        },
        {
          id: 3,
          name: 'Done',
          todos: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Work',
      columns: [
        {
          id: 1,
          name: 'Todo',
          todos: [],
        },
        {
          id: 2,
          name: 'In Progress',
          todos: [],
        },
        {
          id: 3,
          name: 'Done',
          todos: [],
        },
      ],
    },
  ];
  sections: Section[] = this.defaultSections;


  //  Constructor
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.activeSectionId = parseInt(params['sectionId'], 10);
    });

    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  // On Init add default sections and columns
  ngOnInit() {
  }

  handleDateInput(event: any) {
    const input = event.target.value;
    const validDateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!validDateRegex.test(input)) {
      event.target.value = '';
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }


  addSection(event: Event, name: string) {
    event.preventDefault(); // Prevent from reloading the page

    const sectionNameExists = this.sections.some(
      (section) => section.name.toLowerCase() === name.toLowerCase()
    );

    if (sectionNameExists || name === '') {
      return;
    }

    const section: Section = {
      id: this.sections.length + 1,
      name: name,
      columns: [
        {
          id: 1,
          name: 'Todo',
          todos: [],
        },
        {
          id: 2,
          name: 'In Progress',
          todos: [],
        },
        {
          id: 3,
          name: 'Done',
          todos: [],
        },
      ],
    };

    this.sections.push(section);
  }

  deleteSection(index: number) {
    this.sections.splice(index, 1);
  }

  renameSection(section: Section, newName: string) {
    if (newName === '') {
      alert('Please enter a name for the section');
      return;
    }
    section.name = newName;
  }

  addColumn(event: Event, section: Section, name: string) {
    event.preventDefault(); // Prevent from reloading the page

    const column: Column = {
      id: section.columns.length + 1,
      name: name,
      todos: [],
    };

    section.columns.push(column);
  }

  deleteColumn(section: Section, index: number) {
    section.columns.splice(index, 1);
  }

  addTodo(
    event: Event,
    column: Column,
    title: string,
    description: string,
    deadline: string
  ) {
    event.preventDefault(); // Prevent from reloading the page

    const todo: Todo = {
      id: column.todos.length + 1,
      title: title,
      description: description,
      createdAt: new Date(),
      deadline: deadline,
    };

    if (this.todoForm.valid) {
      column.todos.push(todo);
      this.todoForm.reset();
    }
  }

  deleteTodo(column: Column, index: number) {
    column.todos.splice(index, 1);
  }
}
