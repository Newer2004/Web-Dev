import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product : { description: string | undefined; id: number | undefined; image: string | undefined; link: string | undefined; name: string | undefined; price: number | undefined; rating: number | undefined };
  @Output() remove = new EventEmitter();

  like : number;
  show : boolean;
  constructor() {
    this.like = 0;
    this.show = false;

    this.product = new class implements Product {
      // @ts-ignore
      id: number | undefined;
      // @ts-ignore
      name: string | undefined;
      // @ts-ignore
      image: string | undefined;
      // @ts-ignore
      price: number | undefined;
      // @ts-ignore
      rating: number | undefined;
      // @ts-ignore
      description: string | undefined;
      // @ts-ignore
      link: string | undefined;
    }
  }

  incLike(){
    this.like++;
  }
  showDetails(){
    this.show = !this.show;
  }
  removeProduct(){
    this.remove.emit(this.product.id)
  }
  shareViaTelegram() {
    window.open("https://telegram.me/share/url?url=" + this.product.link + "&text=<{{product.name}}>")
  }
  shareViaWhatsapp() {
    window.open("https://wa.me/?text=" + this.product.link)
  }
}
