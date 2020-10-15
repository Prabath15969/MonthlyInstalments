import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { DetailsServiceService } from "../service/details-service.service";

@Component({
  selector: "app-calculation",
  templateUrl: "./calculation.component.html",
  styleUrls: ["./calculation.component.scss"],
})
export class CalculationComponent implements OnInit {
  rental: FormGroup;

  installment: number;

  constructor(
    private service: DetailsServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.rental = this.fb.group({
      amount: ["", [Validators.required]],
      rate: [""],
      duration: [""],
    });
  }
  get amount() {
    return this.rental.get("amount");
  }
  get rate() {
    return this.rental.get("rate");
  }
  get duration() {
    return this.rental.get("duration");
  }

  onSubmit() {
    const amount = this.amount.value;
    const rate = this.rate.value;
    const duration = this.duration.value;

    const totalAmount = amount * (1 + 0.01 * rate);

    const monthRating = ((amount * rate) / 100 + amount) / duration;
    this.installment = +monthRating.toFixed(3);

    this.service.changeInstallment(monthRating);
    console.log(monthRating);
    this.service.setAmount(totalAmount);
  }
}
