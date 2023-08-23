import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   constructor(private router: Router){}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    
    navp1(){
		this.router.navigate(['/pag1']);
	}
	navp2(){
		this.router.navigate(['/pag2']);
	}
	navhome(){
		this.router.navigate(['/home']);
	}
    

}
