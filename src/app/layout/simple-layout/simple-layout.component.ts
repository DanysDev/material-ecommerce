import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {FooterSimpleComponent} from "../footer-simple/footer-simple.component";

@Component({
    selector: 'app-simple-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FooterSimpleComponent],
    templateUrl: './simple-layout.component.html',
    styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent {

}
