import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
// import { Router } from 'express';
import { Product } from '../model/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{


  name!: string;
  price!: number;
  
  constructor(
      private productService: ProductService,
      private toast: ToastrService,
      // private router: Router
  ) { }
    ngOnInit(): void {
        
    }

    onCreate() : void {
      const product = new Product(this.name, this.price);
      this.productService.create(product).subscribe(
        data => {
          this.toast.success(data.message, 'OK', {timeOut:3000,positionClass:'toast-top-center'});
          // (<any>this.router).navigate(['']);

        },
        err =>{
          this.toast.success(err.error.message, 'Error', {timeOut:3000,positionClass:'toast-top-center'});
        }
      );
    }

}
