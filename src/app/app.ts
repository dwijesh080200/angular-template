import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from "./layout/banner/banner";
import { Menu } from "./layout/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-template');
}
