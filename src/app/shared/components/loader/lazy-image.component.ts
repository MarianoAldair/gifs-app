import { Component, Input } from "@angular/core";

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {
  @Input('imageUrl')
  public imageUrl!: string;

  @Input('imageAlt')
  public imageAlt!: string;

  public hasLoaded: boolean = false;

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 800)
  }
}
