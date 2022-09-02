import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students$!: Observable<Student[]>;
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }

}
