import { Component, Input } from '@angular/core';
import { ProdutModel } from '../products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProdutModel;
}
