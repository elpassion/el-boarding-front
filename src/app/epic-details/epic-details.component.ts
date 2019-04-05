import { Epic } from '../epic';
import { Task } from '../task';
import { Component, OnInit, Input } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-epic-details',
  templateUrl: './epic-details.component.html',
  styleUrls: ['./epic-details.component.scss']
})
export class EpicDetailsComponent implements OnInit {
  @Input() epic: Epic;

  tasks: Task[];
  selectedTask: Task;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
