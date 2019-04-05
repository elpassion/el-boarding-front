import { Component, OnInit } from '@angular/core';

import { Epic } from '../epic';
import { EpicService } from '../epic.service';


@Component({
  selector: 'app-epic-list',
  templateUrl: './epic-list.component.html',
  styleUrls: ['./epic-list.component.scss']
})
export class EpicListComponent implements OnInit {

  epics: Epic[];
  selectedEpic: Epic;

  constructor(private epicService: EpicService) {}

  ngOnInit() {
    this.getEpics();
  }

  getEpics(): void {
    this.epicService.getEpics()
      .subscribe(epics => this.epics = epics);
  }

  onSelect(epic: Epic): void {
    this.selectedEpic = epic;
  }
}
