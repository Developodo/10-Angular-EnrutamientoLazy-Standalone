import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../../model/driver';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DriverComponent implements OnInit {
  private driverS = inject(DriverService);
  driver!: Driver | undefined;

  private router = inject(Router);

  @Input()
  set name(driverName: string) {
    this.driver = this.driverS.findByName(driverName);
    console.log(this.driver);
  }

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => console.log(params.name));
  }

  ngOnInit() {}

  vaAInicio(): void {
    this.router.navigateByUrl('/');
  }
}
