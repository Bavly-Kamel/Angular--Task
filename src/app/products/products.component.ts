import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsModel } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  protected data?: ProductsModel;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getProductsList$().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
