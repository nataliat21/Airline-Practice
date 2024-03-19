import { Component } from '@angular/core';

@Component({
  selector: 'tool-bar-component',
  standalone: true,
  imports: [],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  openMenu: boolean = false;
  showInformation: boolean = false;

  toggleMenu() {
    this.openMenu = !this.openMenu;
    if (this.openMenu) {
      this.showInformation = false; // Si se abre el menú, asegúrate de que la información esté cerrada
    }
  }

  toggleInformation() {
    this.showInformation = !this.showInformation;
    if (this.showInformation) {
      this.openMenu = false; // Si se muestra la información, asegúrate de que el menú esté cerrado
    }
    else if (!this.showInformation) {
      this.openMenu = true; // Si se cierra la información, asegúrate de que el menú esté abierto
    }
  }

}
