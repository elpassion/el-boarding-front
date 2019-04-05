import { Epic } from '../epic';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { TaskComponent } from '../task/task.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-epic-details',
  templateUrl: './epic-details.component.html',
  styleUrls: ['./epic-details.component.scss']
})
export class EpicDetailsComponent implements OnInit {
  @Input() epic: Epic;

  tasks = TASKS;

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}
