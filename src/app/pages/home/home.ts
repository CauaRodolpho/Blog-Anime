import { Component } from '@angular/core';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { BigCard } from '../../components/big-card/big-card';
import { SmallCard } from '../../components/small-card/small-card';
import { Footer } from '../../components/footer/footer';;

@Component({
  imports: [MenuBar, MenuTitle, BigCard, SmallCard, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
