import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  main:any [] = [
    {icon: "../../assets/overview.svg", name: "Overview"},
    // {name: "2"}
  ];

  payments:any [] = [
    {icon: "../../assets/all_payments.svg", name: "All Payments"},
    {icon: "../../assets/reconciled_payments.svg", name: "Reconcilled Payments"},
    {icon: "../../assets/unreconciled_payments.svg", name: "Un-Reconcilled Payments"},
    {icon: "../../assets/manual_settlement.svg", name: "Manual Settlement"},
  ];

  orders:any [] = [
    {icon: "../../assets/all_orders.svg", name: "All Orders"},
    {icon: "../../assets/pending_orders.svg", name: "Pending Orders"},
    {icon: "../../assets/reconciled_orders.svg", name: "Reconcilled Orders"},
  ]

  items: any[] = [
    {icon: "../../assets/user.svg", name: "Merchant Profile"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
