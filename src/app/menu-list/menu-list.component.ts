import { DataListService } from './../data-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  links = [
    {id: 0, name: 'Income'},
    {id: 1, name: 'Outcome'},
    {id: 2, name: 'Loans'},
    {id: 3, name: 'Investmens'}
  ];

  constructor(private router: Router, public dataListService: DataListService) { }

  ngOnInit(): void {
    this.dataListService.filterData(0);
  }


}
