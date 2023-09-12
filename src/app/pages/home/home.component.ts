import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SecondComponent } from '../../components/second/second.component';
import { FirstComponent } from '../../components/first/first.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FirstComponent, SecondComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
