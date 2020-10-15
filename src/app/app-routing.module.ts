import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { CalculationComponent } from "./calculation/calculation.component";

const routes: Routes = [
  { path: "details", component: DetailsComponent },
  { path: '', component: CalculationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
