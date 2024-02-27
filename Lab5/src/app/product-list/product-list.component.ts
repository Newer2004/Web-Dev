import {Component, OnInit} from '@angular/core';

import {categories} from "../categories";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  category : { id: number; title: string; items: { image: string; price: number; name: string; rating: number; link: string; description: string; id: number }[] } | { id: number; title: string; items: { image: string; price: number; name: string; rating: number; link: string; description: string; id: number }[] } | { id: number; title: string; items: ({ image: string; price: number; name: string; rating: number; link: string; description: string; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: string; id: number })[] } | { id: number; title: string; items: ({ image: string; price: number; name: string; rating: number; link: string; description: string; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: string; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: string; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: string; id: number })[] } | undefined;

  constructor(private route : ActivatedRoute) {
  }

  removeProduct(ind : number){
    // @ts-ignore
    this.category.items = this.category.items.filter((x) => x.id !== ind);
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
