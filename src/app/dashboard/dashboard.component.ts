import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { TableService } from '../table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  tableLoading: boolean = true;
  dataSource: any[] = [];
  dataSub: Subscription = new Subscription();
  p: number = 1;
  itemsPerPage = 10;

  constructor(
    private observer: BreakpointObserver,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    this.tableLoading = true;
    this.dataSub = this.tableService.getJsonData().subscribe((dataSource) => {
      this.dataSource = dataSource;
      this.tableLoading = false;
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  selected() {
    if (this.sidenav.mode == 'over') {
      this.sidenav.close();
    }
  }
}
