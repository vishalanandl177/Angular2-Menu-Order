import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order';
  products = [
          {"id":1, "name":"Pasta Carbonara", "price":12},
          {"id":2, "name":"PasMargherita Pizza", "price":27},
          {"id":3, "name":"Mushroom Risotto", "price":16},
          {"id":4, "name":"Panzenella", "price":10},
          {"id":5, "name":"Bruschetta", "price":10},
          {"id":6, "name":"Tiramisu", "price":6}
          ];
  orders = [];
  total = 0;
    addToOrderList(id){
      //alert(id);
      var exist      = this.orders.find(x => x.id == id);
      var myObject  = this.products.find(x => x.id == id);
        if(!exist){
          myObject["count"] = 1;
          this.orders.push(myObject); 
          this.total += myObject["price"];
        }else{
          var index = this.orders.indexOf(exist);
          var obj = {
                  "id":exist["id"],
                  "name":exist["name"], 
                  "price": myObject["price"]*(exist["count"] + 1), 
                  "count":exist["count"] + 1
                  };
          this.orders[index] = obj;
          this.total += myObject["price"];
        } 
    }
    removeFromOrderList(id){
      var exist =  this.orders.find(x => x.id == id);
      var myObject  = this.products.find(x => x.id == id);
      if(exist["count"] == 1){
        this.orders.splice(exist,1);
        this.total -= myObject["price"];
      }else{
        var index = this.orders.indexOf(exist);
        var obj = {
                "id":exist["id"],
                "name":exist["name"], 
                "price":myObject["price"]*(exist["count"] - 1), 
                "count":exist["count"] - 1
                };
        this.orders[index] = obj;
        this.total -= myObject["price"];
        console.log(obj);
        console.log(this.total);        
      }
      
    }
}
