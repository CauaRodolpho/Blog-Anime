import { Component, signal } from '@angular/core';
import { MenuTitle } from './components/menu-title/menu-title';
import { BigCard } from './components/big-card/big-card';
import { SmallCard } from './components/small-card/small-card';
import { Home } from './pages/home/home';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';

@Component({
  imports: [MenuTitle, BigCard, SmallCard, Home, RouterOutlet, MenuBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Blog-Dio');
}
