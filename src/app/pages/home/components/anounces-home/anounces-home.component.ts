import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-anounces-home',
    standalone: true,
    imports: [CommonModule, MatButtonModule, NgOptimizedImage],
    templateUrl: './anounces-home.component.html',
    styleUrls: ['./anounces-home.component.scss']
})
export class AnouncesHomeComponent {

}
