import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { DriverService } from '../../services/driver.service';
import { Driver } from '../../model/driver';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nombre: string = '';
  edad: number = 10;
  private timeout!: any;

  private driverS = inject(DriverService);

  constructor(private logS: LogService) {
    this.logS.log('Creando el componente 1');
  }

  estiloLetras = {
    color: this.edad < 18 ? 'red' : 'green',
    'font-weight': this.edad < 18 ? 'bold' : 'normal',
  };

  clasesBorde = ['contenedor', 'normal'];

  incrementaEdad(): void {
    this.edad++;
    this.cambiaBorde(['contenedor', 'incrementa']);
  }
  decrementaEdad(): void {
    this.edad--;
    this.cambiaBorde(['contenedor', 'decrementa']);
  }
  inserta(): void {
    alert(`${this.nombre} puede sacarse la licencia`);

    const driver: Driver = {
      nombre: this.nombre,
      edad: this.edad,
    };
    this.driverS.add(driver);

    this.resetea();
  }

  public poneMayuscula(event?: Event): void {
    this.nombre = this.nombre.toUpperCase().trim();
  }
  public resetea(): void {
    this.nombre = '';
    this.edad = 10;
  }

  cambiaBorde(clases: string[] = ['contenedor', 'normal']): void {
    this.clasesBorde = clases;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.clasesBorde = ['contenedor', 'normal'];
      this.timeout = undefined;
    }, 1000);
  }

  trackByFunction(index: number, item: any) {
    return item.nombre;
  }
}
