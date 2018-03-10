import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
token:any;
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  constructor(private translate: TranslateService,private router:Router,private AativatedRoute:ActivatedRoute) {
    translate.setDefaultLang('en');
}
useLanguage(language: string) {
  this.translate.use(language);
}
  ngOnInit(): void {}

  Logout()
  {
    this.token=sessionStorage.getItem('a_Token');
  sessionStorage.clear();
  sessionStorage.removeItem(this.token);
  this.router.navigate(['/pages/login']);
  }

  dashboard(){
  
    let id=sessionStorage.getItem('ownerID');
    alert(id);
    if(id=='1'){
      alert('1'+id)
  this.router.navigate(['/adashboard']);
    }
    if(id=='2'){
      alert('2'+id);
      this.router.navigate(['/dashboard']);
    }
    if(id=='3'){
      this.router.navigate(['/odashboard']);
    }
    }


}
