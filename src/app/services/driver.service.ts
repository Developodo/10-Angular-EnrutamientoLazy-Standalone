import { inject, Injectable } from '@angular/core';
import { Driver } from '../model/driver';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private _data: Driver[] = [
    {
      nombre: 'Developodo',
      edad: 5,
    },
  ];
  private logS = inject(LogService);
  constructor() {}

  add(driver: Driver) {
    this._data.push(driver);
    this.logS.log('Añadimos nuevo conductor');
  }

  get data() {
    return this._data;
  }
  set data(data: Driver[]) {
    if (data) {
      this._data = data;
    } else {
      this.logS.warn('Lista no definida, creando array vacío');
      this._data = [];
    }
  }

  findByName(nameDriver: string) {
    return this._data.find((el) => el.nombre === nameDriver);
  }
}
