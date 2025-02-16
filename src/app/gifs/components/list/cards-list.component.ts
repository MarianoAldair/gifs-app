import { Component, Input } from "@angular/core";
import { Gif } from "../../interfaces/gifs.interface";

@Component({
  selector: 'gifs-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  @Input('gifsList')
  public gifsList: Gif[] = [];
}
