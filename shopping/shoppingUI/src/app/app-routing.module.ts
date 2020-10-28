import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  // {path:"**",component:LoginComponent},
  {path: "viewOrders", component: ViewOrderComponent},
  {path: "product/:id", component: ProductComponent},
  {path:"register",component:RegisterComponent},
  {path:"wishlist",component:WishlistComponent},
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
