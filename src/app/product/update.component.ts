import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  // id!: number;
  // product!: Product;
  
  // constructor(
  //     private activatedRoute: ActivatedRoute,
  //     private productService: ProductService,
  //     private toast: ToastrService,
  //     private router: Router,
      
      
  //   ) { }

    ngOnInit(): void {
      // this.id= this.activatedRoute.snapshot.params['id'];
    }

    // getProduct(): void {
    //     this.id= this.activatedRoute.snapshot.params['id'];
    //     // const id = this.activatedRoute.snapshot.params.id;
        
    //     this.productService.detail('this.id').subscribe(
    //       data => {
    //         this.product = data;
    //         console.log(this.product);
    //       },
    //       err => {
    //         this.toast.error(err.error.message, 'Error', {timeOut:3000,positionClass:'toast-top-center'});
    //         this.router.navigate(['']);
    //       }
    //     );
    //   }


  }
