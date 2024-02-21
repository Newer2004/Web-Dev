import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  shareViaTelegram(product : {link : string}) {
      window.open("https://telegram.me/share/url?url=" + product.link + "&text=<{{product.name}}>")
  }
  shareViaWhatsapp(product : {link : string}) {
    window.open("https://wa.me/?text=" + product.link)  
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
