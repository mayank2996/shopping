import {HttpClientModule} from "@angular/common/http";
import { NgModule } from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { MatToolbarModule} from "@angular/material";
import {MatSnackBarModule} from "@angular/material";
import {MatTabsModule} from "@angular/material";
import {MatBadge, MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {LoginService} from "../app/login/login.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {DashboardService} from "./dashboard/dashboard.service";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { ViewOrderService } from "./view-order/view-order.service";
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    ViewOrderComponent,
    RegisterComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  providers: [LoginService, DashboardService, ViewOrderService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
