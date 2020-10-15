import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DetailsServiceService {
  constructor() {}

  private installment = new BehaviorSubject(0);
  monthlyInstallment = this.installment.asObservable();
  
  private totalAmount = new BehaviorSubject(0);
  t_amount = this.totalAmount.asObservable();

  changeInstallment(amount: number) {
    this.installment.next(amount);
  }

  setAmount(data: number) {
    this.totalAmount.next(data);
  }
}
