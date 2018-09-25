import { Component, OnInit } from '@angular/core';
import { ProductsList } from '../shopcartlist.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../../ads/products.service';

@Component({
  selector: 'app-shop-cart-list',
  templateUrl: './shop-cart-list.component.html',
  styleUrls: ['./shop-cart-list.component.css']
})
export class ShopCartListComponent implements OnInit {
  productsList: ProductsList[];
  private subscription: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productsList = this.productService.getProductsList();
    this.subscription = this.productService.productChanged
      .subscribe(
        (productsList: ProductsList[]) => {
          this.productsList = productsList
        }
      );
  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }

}
