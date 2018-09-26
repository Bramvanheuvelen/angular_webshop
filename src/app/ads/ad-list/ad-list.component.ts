import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

import { ProductService } from '../products.service'
import { Subscription, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  productChanged = new Subject<Product[]>();
  products: Product[];
  subcription: Subscription;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.subcription = this.productService.productChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
      this.products = this.productService.getProducts();
    }

    onNewProduct() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

    addProduct(product: Product) {
      this.products.push(product);
      this.productChanged.next(this.products.slice());
    }

}
