import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: 'app-most-sell',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
    templateUrl: './most-sell.component.html',
    styleUrls: ['./most-sell.component.scss']
})
export class MostSellComponent {

}
