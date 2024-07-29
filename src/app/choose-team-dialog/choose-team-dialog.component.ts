import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Task } from '../shared/model/task';

@Component({
  selector: 'app-choose-team-dialog',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule, MatButtonModule
  ],
  templateUrl: './choose-team-dialog.component.html',
  styleUrl: './choose-team-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseTeamDialogComponent { 
  constructor(@Inject(MAT_DIALOG_DATA) public selectedTask: Task){}
}
