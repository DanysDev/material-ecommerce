import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, MatMenuModule, MatCardModule, MatTabsModule, MatListModule, NgOptimizedImage, MatInputModule, RouterLink, MatDialogModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    dialog: MatDialog = inject(MatDialog)

    language = signal<string>('assets/icons/es.svg')
    badgeLoveOff = signal<boolean>(false)
    badgeNotificationsOff = signal<boolean>(false)
    badgeCartOff = signal<boolean>(false)
    breackpoints = signal({
        small: '350px',
        medium: '650px',
        laptop: '1024px',
        desktop: '1920px',
        cuatroK: '2556px'
    })

    onToggleFlags(state: string) {
        state === 'spanish' ? this.language.set('assets/icons/es.svg') : this.language.set('assets/icons/en.svg')
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    handleOpenDialog() {
        this.dialog.openDialogs
    }
}
