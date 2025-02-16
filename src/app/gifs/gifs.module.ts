import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardComponent } from "./components/card/card.component";
import { CardsListComponent } from "./components/list/cards-list.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent,
    CardsListComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent,
  ],
})
export class GifsModule { }
