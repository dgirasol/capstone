import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refreshmedia',
  templateUrl: './refreshmedia.page.html',
  styleUrls: ['./refreshmedia.page.scss'],
})
export class RefreshmediaPage implements OnInit {

  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      console.log(this.id)
      this.router.navigate(['/details', this.id]);


 });
  }

}
