import { Component, Input } from "@angular/core";
import { Gif } from "../../interfaces/gifs.interface";

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('gif')
  public gif!: Gif;
}
