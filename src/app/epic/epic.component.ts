import { Component, OnInit, Input } from '@angular/core';
import { Epic } from '../epic';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

  @Input() epic: Epic;

  constructor() { }

  ngOnInit() { }
}
