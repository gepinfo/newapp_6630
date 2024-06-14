import { Component, OnInit, ViewChild } from '@angular/core';
import { TickService } from './tick.service';





@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.component.scss'],
})

export class TickComponent implements OnInit {
    public tick:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private tickService: TickService,
    ) { }

    ngOnInit() {
        this.tick.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;



  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

}





