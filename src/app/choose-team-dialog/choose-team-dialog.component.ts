import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Task } from '../shared/model/task';
import { PeronsService } from '../services/perons.service';
import { Person } from '../shared/model/person';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-choose-team-dialog',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatProgressBarModule
  ],
  templateUrl: './choose-team-dialog.component.html',
  styleUrl: './choose-team-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseTeamDialogComponent implements OnInit { 
  allPersons : Person[] = [];
  randomTeam : Person[] = [];
  personIndex = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public selectedTask: Task,
    private personService : PeronsService){}

  ngOnInit(): void {
    this.allPersons = this.personService.list();
    this.generateRandomTeam();
  }

  generateRandomTeam() {
    this.randomTeam = [...this.allPersons];
    this.randomTeam.sort(() => Math.random() - 0.5);
    this.randomTeam = this.randomTeam.slice(0, Math.min(4, this.allPersons.length));
  }

  nextPerson() {
    ++this.personIndex;

    if (this.personIndex == this.randomTeam.length) {
      //close dialog
    }
  }
}
