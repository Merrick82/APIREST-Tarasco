import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curse } from 'src/app/models/curse';
import { CurseService } from '../../../core/services/curse.service';

@Component({
  selector: 'app-curse-list',
  templateUrl: './curse-list.component.html',
  styleUrls: ['./curse-list.component.css']
})
export class CurseListComponent implements OnInit {
  public curses$!: Observable<Curse[]>;

  constructor(private curseService: CurseService) { }

  ngOnInit(): void {
    this.curses$ = this.curseService.getCurses();
  }

}
