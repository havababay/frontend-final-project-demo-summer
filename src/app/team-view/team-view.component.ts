import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PeronsService } from '../services/perons.service';
import { TasksService } from '../services/tasks.service';
import { Person } from '../shared/model/person';
import { PersonCardComponent } from "../person-card/person-card.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-view',
  standalone: true,
  imports: [
    CommonModule,
    PersonCardComponent,
    RouterModule
],
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamViewComponent implements OnInit { 
  allPerson : Person[] = [];

  constructor(private personService : PeronsService){}
  
  ngOnInit(): void {
    this.personService.list().then(
      (result : Person[]) => {
        this.allPerson = result;
      }
    );
  }
}
