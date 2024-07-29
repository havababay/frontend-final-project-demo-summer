import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../shared/model/task';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ChooseTeamDialogComponent } from '../choose-team-dialog/choose-team-dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-task',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './choose-task.component.html',
  styleUrl: './choose-task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseTaskComponent implements OnInit {
  allTasks: Task[] = [];
  selectTask?: Task;
  constructor(
    private tasksService: TasksService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.allTasks = this.tasksService.list();
  }

  openDialog() {
    this.dialogService.open(ChooseTeamDialogComponent,
     { data: this.selectTask}
    );
  }
}
