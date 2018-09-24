import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html'
})
export class AdDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id= +params['id'];
          this.product = this.productService.getProduct(this.id)
        }
      )
  }

  addToBasket(products: Product[]) {
    this.productService.addProduct(this.product)
  }

}
