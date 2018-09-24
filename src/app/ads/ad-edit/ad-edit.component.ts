import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-ad-edit',
  templateUrl: './ad-edit.component.html',
  styleUrls: ['./ad-edit.component.css']
})
export class AdEditComponent implements OnInit {
  id: number;
  editMode = false;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        });
  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route });
  }

  private initForm() {
    let imageUrl = '';
    let productTitel = '';
    let productDescription = '';
    let productPrice = {  };

    if (this.editMode) {
      const product = this.productService.getProduct(this.id);
      imageUrl = product.imageUrl;
      productTitel = product.titel;
      productDescription = product.description;
      productPrice = product.price;
    }

    this.productForm = new FormGroup({
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'titel': new FormControl(productTitel, Validators.required),
      'description':  new FormControl(productDescription, Validators.required),
      'price':  new FormControl(productPrice, Validators.required)
    });

   }

}
