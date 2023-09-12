import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private cont: number = 0;
  constructor() {}

  log(msg: string): void {
    console.log(`${++this.cont} ${msg}`);
  }
  error(msg: string): void {
    console.error(`${++this.cont} ${msg}`);
  }
  warn(msg: string): void {
    console.warn(`${++this.cont} ${msg}`);
  }
}
