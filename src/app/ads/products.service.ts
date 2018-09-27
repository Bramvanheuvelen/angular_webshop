import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Subject } from 'rxjs';
import { ProductsList } from '../shop-cart/shopcartlist.model'

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
      'https://assets.volvocars.com/nl/~/media/shared-assets/images/galleries/inside/our-company/heritage/heritage-models/58_volvo_v70_v70xc_classic_large.jpg?w=1536',
      'https://cdn.autotrack.nl/30151273/0-MOR-27246328.jpg',
      'http://bay2car.com/img/1999-VOLVO-V70-2-5D-AUTO-GREEN-141642658323/0.jpg'
    ),
    new Product(
      'Sjawls',
      '100% Cashmere',
      75,
      'https://www.cashmere.org/img-ccmi/home-banner-integrity.jpg',
      'http://www.weesnerbittersweetfarm.com/uploads/2/5/6/1/25610638/header_images/1410524785.jpg',
      'http://livestockpedia.com/wp-content/uploads/2016/05/Cashmere1.jpg'
    )
  ]

  private productsList: ProductsList[] = []

constructor(private productService: ProductService) { }

setProducts(products: Product[]) {
  this.products = products;
  this.productChanged.next(this.products.slice())
}

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

addProductToList(product: ProductsList) {
  this.productsList.push(product);
  this.productChanged.next(this.products.slice());
}

addProductToShoppingList(productsList: ProductsList) {
  this.addProductToList(productsList);
}

deleteProduct(index: number) {
  this.products.splice(index, 1);
  this.productChanged.next(this.products.slice());
}

getProductsList() {
  return this.productsList.slice();
}
}
