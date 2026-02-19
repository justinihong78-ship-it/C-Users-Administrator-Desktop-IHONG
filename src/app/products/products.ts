import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products = [
    { name: 'Sniper155 Standard', price: 2999, specs: '155cc • 14.8 HP • 5-Speed', available: true },
    { name: 'Sniper155 Sport', price: 3499, specs: '155cc • 16.5 HP • 6-Speed', available: true },
    { name: 'Sniper155 Elite', price: 4199, specs: '155cc • 18.2 HP • Fuel Injection', available: false },
    { name: 'Sniper155 Racing', price: 4999, specs: '155cc • 20 HP • Advanced Suspension', available: true }
  ];

  cart: any[] = [];
  showCart: boolean = false;

  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
