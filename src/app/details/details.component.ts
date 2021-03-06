import { Component, OnInit } from "@angular/core";
import { DetailsServiceService } from "../service/details-service.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export class Detail {
  public rental_no: number;
  public date: any;
  public monthly : number;
  public amount_paid: number;
  public amount_to_be_paid: number;
}

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),
  ]
})
export class DetailsComponent implements OnInit {
  detailList: Detail[] = [];

  amount: number;
  monthlyInstallment: number;
  paidToBe: number;

  constructor(private service: DetailsServiceService) {}

  ngOnInit(): void {
    this.service.t_amount.subscribe((res) => (this.amount = res));

    this.service.monthlyInstallment.subscribe(
      (res) => (this.monthlyInstallment = res)
    );

    console.log(this.monthlyInstallment + "monthly ");
    this.viewDetails();
  }

  viewDetails() {
    let i = 1;
    let date = new Date();

    let paidAmount = this.monthlyInstallment;

    do {
      console.log("while" + i);
      date.setMonth(date.getMonth()+1);

      let rowData = new Detail();

      rowData.rental_no = i;
      rowData.date = date.toDateString();
      rowData.monthly = this.monthlyInstallment;
      rowData.amount_paid = +paidAmount.toFixed(3);
      rowData.amount_to_be_paid = +(this.amount - paidAmount).toFixed(3);

      i = i + 1;
      paidAmount = paidAmount + this.monthlyInstallment;

      this.detailList.push(rowData);
    } while (paidAmount <= this.amount && paidAmount != 0);
  }
}
