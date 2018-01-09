import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) {
   
   }
   create(product){
     const productsRef =  this.db.list('products');
     productsRef.push(product);
  }
  getAll(){
    return this.db.list('/products');
  }
  get(productId){
    return this.db.object('/products/' + productId);
  }
  update(productId, product){
    return this.db.object('/products/'+ productId).update(product);
  }
  delete(productId){
    return this.db.object('/products/'+ productId).remove()
  }
}
