import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../../../../Lab4/src/app/products'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product! : Product;
  @Output() notify = new EventEmitter();
}
