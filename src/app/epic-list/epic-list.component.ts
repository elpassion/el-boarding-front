import { Component, OnInit } from '@angular/core';

import { Epic } from '../epic';
import { EpicComponent } from '../epic/epic.component';
import { EPICS } from '../mock-epics';


@Component({
  selector: 'app-epic-list',
  templateUrl: './epic-list.component.html',
  styleUrls: ['./epic-list.component.scss']
})
export class EpicListComponent implements OnInit {

  epics = EPICS;
  selectedEpic: Epic;

  constructor() { }

  ngOnInit() {}

  onSelect(epic: Epic): void {
    this.selectedEpic = epic;
  }
}
