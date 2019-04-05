import { Injectable } from '@angular/core';
import { Epic } from './epic';
import { EPICS } from './mock-epics';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  constructor() { }

  getEpics(): Observable<Epic[]> {
    return of(EPICS);
  }
}
