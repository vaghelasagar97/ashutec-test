import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  removeProduct(id) {
    this.products.forEach(p => {
      if (p.id == id) {
        p.isDeleted = true
      }
    })
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  likeProduct(id) {
    this.products.forEach(p => {
      if (p.id == id) {
        p.isLiked = true
      }
    })
    localStorage.setItem('products', JSON.stringify(this.products))
  }

  searchProduct(event) {
    let list = JSON.parse(localStorage.getItem('products'));
    this.products = list.filter(e => {
      return (e.title + '').includes(event.target.value)
    })
  }
  checkProducts() {
    return this.products.filter(e => !e.isDeleted).length == 0
  }

}
