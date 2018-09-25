import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../ads/products.service'
import { Product } from '../ads/product.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private productService: ProductService,
              private authService: AuthService) {}

    storeProducts() {
      const token = this.authService.getToken();

      return this.httpClient.put('https://webshop-angular.firebaseio.com/products.json?auth=' + token, this.productService.getProducts());
    }

    getRecipes() {
      const token = this.authService.getToken();

      this.httpClient.get<Product[]>('https://webshop-angular.firebaseio.com/products.json?auth=' + token)
        .map(
          (recipes) => {
            return recipes;
          }
        )
        .subscribe(
          (products: Product[]) => {
            this.productService.setProducts(products);
          }
        );
    }
}
