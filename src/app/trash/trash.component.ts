import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  products = [];

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  removeProduct(id) {
    this.products.splice(this.products.findIndex(e => e.id == id), 1)
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  restoreProduct(id) {
    this.products.forEach(p => {
      if (p.id == id) {
        p.isDeleted = false
      }
    })
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  checkProducts() {
    return this.products.filter(e => e.isDeleted).length == 0
  }


}
