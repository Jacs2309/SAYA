import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit{
	constructor(private router:Router){}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    navp1(){
		this.router.navigate(['/pag1']);
	}
	navp2(){
		this.router.navigate(['/pag2']);
	}

}
