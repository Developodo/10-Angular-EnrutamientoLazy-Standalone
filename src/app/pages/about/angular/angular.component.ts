import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
