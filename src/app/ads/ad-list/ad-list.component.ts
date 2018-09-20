import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

import { ProductService } from '../products.service'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  products: Product[];
  subcription: Subscription;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subcription = this.productService.productChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
      this.products = this.productService.getProducts();
    }

}
