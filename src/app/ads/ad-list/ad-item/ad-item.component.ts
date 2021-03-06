import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../products.service';

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;
  router: any;
  route: any;
  id: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  toShoppingCart() {
      this.productService.addProductToShoppingList(this.product);
    }

    onEditProduct() {
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

  }

