import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product = {};

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let products = JSON.parse(localStorage.getItem('products'));
    this.product = products.filter(e => {
      // Getting Id from URL 
      return e.id == this.activatedRoute.snapshot.params.id;
    })
  }

}
