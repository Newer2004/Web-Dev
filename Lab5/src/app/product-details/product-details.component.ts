import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {Product} from '../products';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{
  @Input() detailedProduct : { description: string | undefined; id: number | undefined; image: string | undefined; link: string | undefined; name: string | undefined; price: number | undefined; rating: number | undefined };
  constructor(private route : ActivatedRoute, 
              private cartService: CartService){
    this.detailedProduct = new class implements Product {
      // @ts-ignore
      description: string | undefined;
      // @ts-ignore
      id: number | undefined;
      // @ts-ignore
      image: string | undefined;
      // @ts-ignore
      link: string | undefined;
      // @ts-ignore
      name: string | undefined;
      // @ts-ignore
      price: number | undefined;
      // @ts-ignore
      rating: number | undefined;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.detailedProduct);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}
