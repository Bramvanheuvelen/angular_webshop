import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productChanged = new Subject<Product[]>();

  private products: Product[] = [
    new Product(
      'Nice car',
      'As good as new',
      22.500,
      'https://assets.volvocars.com/nl/~/media/shared-assets/images/galleries/inside/our-company/heritage/heritage-models/58_volvo_v70_v70xc_classic_large.jpg?w=1536'
    ),
    new Product(
      'Sjawls',
      '100% Cashmere',
      75,
      'https://www.cashmere.org/img-ccmi/home-banner-integrity.jpg'
    )
  ]

// constructor() { }

getProducts() {
  return this.products.slice();
}

getProduct(index: number) {
  return this.products[index];
}

addProduct(product: Product) {
  this.products.push(product);
  this.productChanged.next(this.products.slice());
}

updateProduct(index: number, newProduct: Product) {
  this.products[index] = newProduct;
  this.productChanged.next(this.products.slice());
}

}
