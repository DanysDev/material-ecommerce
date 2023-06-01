import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MostSellComponent} from "./components/most-sell/most-sell.component";
import {AnouncesHomeComponent} from "./components/anounces-home/anounces-home.component";
import {BestStoreHomeComponent} from "./components/best-store-home/best-store-home.component";
import {DeliveryHomeComponent} from "./components/delivery-home/delivery-home.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HeaderComponent, MostSellComponent, AnouncesHomeComponent, BestStoreHomeComponent, DeliveryHomeComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
