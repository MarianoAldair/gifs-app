import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input type="text" class="form-control" placeholder="Search Gifs.." #searchBox (keyup.enter)="printSearchTerm()">
  `
})
export class SearchBoxComponent {
  @ViewChild('searchBox')
  public searchBox!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) { }

  printSearchTerm(): void {
    const searchTerm: string = this.searchBox.nativeElement.value;
    this._gifsService.searchTag(searchTerm);
    this.searchBox.nativeElement.value = '';
  }

}
