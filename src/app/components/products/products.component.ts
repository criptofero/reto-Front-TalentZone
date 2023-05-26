import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  public products: Product[] | undefined;

  constructor(private productService: ProductsService){ }


  ngOnInit(): void {
  
    this.consultProducts();
  }

  consultProducts(){
    console.log('consultando productos...')

    this.productService.getProducts().subscribe(response => {
      console.log(response);
      this.products = response;
    })
  }

}
