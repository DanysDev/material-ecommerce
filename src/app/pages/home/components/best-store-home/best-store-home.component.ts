import {Component, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Store} from "../../../../core/models/store.interface";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-best-store-home',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, MatButtonModule, MatIconModule],
    templateUrl: './best-store-home.component.html',
    styleUrls: ['./best-store-home.component.scss']
})
export class BestStoreHomeComponent {

    stores = signal<Store[]>([
        {
            'title': 'StoreInterface 1',
            'description': '¡Bienvenido a nuestra tienda! Aquí encontrarás productos de alta calidad para satisfacer tus necesidades. Tenemos ropa, accesorios, artículos para el hogar y tecnología. Nuestro personal amable está siempre dispuesto a ayudarte a encontrar lo que buscas. ¡Esperamos verte pronto!',
            'category': 'Ropa y accesorios',
            'image': 'assets/images/pexels-anna-shvets-3987020.jpg'
        },
        {
            title: 'StoreInterface 1',
            description: '¡Bienvenido a nuestra tienda! Aquí encontrarás productos de alta calidad para satisfacer tus necesidades. Tenemos ropa, accesorios, artículos para el hogar y tecnología. Nuestro personal amable está siempre dispuesto a ayudarte a encontrar lo que buscas. ¡Esperamos verte pronto!',
            category: 'Ropa y accesorios',
            image: 'assets/images/pexels-canva-studio-3277806.jpg'
        },
        {
            title: 'StoreInterface 1',
            description: '¡Bienvenido a nuestra tienda! Aquí encontrarás productos de alta calidad para satisfacer tus necesidades. Tenemos ropa, accesorios, artículos para el hogar y tecnología. Nuestro personal amable está siempre dispuesto a ayudarte a encontrar lo que buscas. ¡Esperamos verte pronto!',
            category: 'Ropa y accesorios',
            image: 'assets/images/pexels-christina-morillo-1181527.jpg'
        },
        {
            title: 'StoreInterface 1',
            description: '¡Bienvenido a nuestra tienda! Aquí encontrarás productos de alta calidad para satisfacer tus necesidades. Tenemos ropa, accesorios, artículos para el hogar y tecnología. Nuestro personal amable está siempre dispuesto a ayudarte a encontrar lo que buscas. ¡Esperamos verte pronto!',
            category: 'Ropa y accesorios',
            image: 'assets/images/pexels-pavel-danilyuk-7674621.jpg'
        },
    ])
}
