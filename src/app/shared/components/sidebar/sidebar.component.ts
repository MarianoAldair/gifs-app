import { Component } from "@angular/core";
import { GifsService } from "src/app/gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  get searchHistory(): string[] {
    return this._gifsService.tagsHistory;
  }
  constructor(private _gifsService: GifsService) { }

  research(searchTerm: string): void {
    this._gifsService.searchTag(searchTerm);
  }
}
