
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../model/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {

  products: Product[] = [];
  
  constructor(
    private productService:ProductService,
      private toast : ToastrService
  ){}
  ngOnInit():void {
    this.getProducts();
  }
  getProducts() :void {
    this.productService.list().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut:3000,positionClass:'toast-top-center'});
      }
    );
  }

  onDelete(id: number): void {
    Swal.fire({
        title: 'Are You Sure ?',
        text: 'You cannot Undo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText:'Cancel'
    }).then((result) =>{
            if(result.value){
             this.productService.delete(id).subscribe(
              data => {
                this.toast.success(data.message, 'OK', {timeOut:3000,positionClass:'toast-top-center'});
                // (<any>this.router).navigate(['']);
                this.getProducts();
      
              },
              err =>{
                this.toast.success(err.error.message, 'Error', {timeOut:3000,positionClass:'toast-top-center'});
              }
             );

            }else if(result.dismiss ===Swal.DismissReason.cancel){
              Swal.fire(
                'canceled',
                'product not deleted',
                'error'
              )
              
            }
      }
    );
  }
  


}

