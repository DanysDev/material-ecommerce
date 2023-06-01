import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, MatDialogModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}
