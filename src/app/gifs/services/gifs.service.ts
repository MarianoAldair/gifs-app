import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private _apiKey: string = 'krZYT9Ia3hKDZSyugcmbGe5k0PZrqwmB';
  private _apiUrl: string = 'https://api.giphy.com/v1/gifs/search';

  constructor(private _http: HttpClient) {
    this.getLocalStorage();
    if(this._tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);
  }

  get tagsHistory(): string[] {
    return this._tagsHistory
  }

  searchTag(tag: string): void {
    this.orderTags(tag);
    this._http.get<SearchResponse>(`${this._apiUrl}?api_key=${this._apiKey}&q=${tag}&limit=10`).subscribe(resp => {
      this.gifsList = resp.data;
    });
  }

  private orderTags(tag: string) {
    if(!tag) return;
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(): void {
    this._tagsHistory = localStorage.getItem('history') !== null ? JSON.parse(localStorage.getItem('history')!) : [];
  }
}
