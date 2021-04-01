import { DataListService } from './../data-list.service';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(public dataListService: DataListService) {

  }

  ngOnInit(): void {

  }

}
