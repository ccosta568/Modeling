import { Component, OnInit } from '@angular/core';
import { PicDetailsService } from '../service/pic-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:PicDetailsService) { }
  picData:any;
  ngOnInit(): void {
    this.picData = this.service.picDetails;
  }

}
