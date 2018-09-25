import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html'
})
export class AdDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
            private productService: ProductService,
            private route: ActivatedRoute,
            private router: Router) { }

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
    this.productService.addProductToList(this.product)
  }

  onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
