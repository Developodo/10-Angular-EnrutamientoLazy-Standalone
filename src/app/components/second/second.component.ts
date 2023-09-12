import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '../../services/log.service';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content select="[head], [cabeza]"></ng-content>
    <ng-container *ngIf="this.driverS.data.length == 0; else elseBlock">
      No hay personas
    </ng-container>

    <ng-template #elseBlock>
      <table border="1">
        <ng-container
          *ngFor="
            let persona of this.driverS.data;
            index as idx;
          "
        >
          <tr>
            <td>Persona #{{ idx + 1 }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.edad }}</td>
          </tr>
        </ng-container>
      </table>
    </ng-template>
    <ng-content select="[foot], [pie]"></ng-content>
  `,
  styles: [],
})
export class SecondComponent {
  private logS = inject(LogService);
  public driverS = inject(DriverService);

  constructor() {
    this.logS.log('Creando componente 2!');
  }
}
