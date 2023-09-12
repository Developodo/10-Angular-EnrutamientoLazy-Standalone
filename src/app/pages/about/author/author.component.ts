import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AuthorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
