import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList : TodoItem[] = [];
  newTask: string = '';

  addTask() : void {
    if(this.newTask.trim() !== '') {
      const newTodoItem : TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.todoList.push(newTodoItem)
      this.newTask = '';
    }
  }

  toggleComplete(index : number) : void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  deleteTask(id : number) : void {
    this.todoList = this.todoList.filter(item => item.id !== id)
    console.log(this.todoList);
    
  }
}
