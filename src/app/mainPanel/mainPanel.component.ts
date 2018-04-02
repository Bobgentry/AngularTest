import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SignatureService} from '../signature.service';
import * as $ from "jquery";
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import { SignaturePanelComponent } from '../signature-panel/signature-panel.component';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-mainPanel',
  templateUrl: './mainPanel.component.html',
  styleUrls: ['./mainPanel.component.css'],
  animations: [fadeInAnimation]
  //,  host: { '[@fadeInAnimation]': '' }
})
export class MainPanelComponent implements OnInit {
 	public signatureImage:string;
  animationState='enter';

  constructor(private router:Router,private signature:SignatureService) { }

  ngOnInit() {
  
   this.signatureImage=this.signature.getSignature();
   console.log('sig',this.signatureImage);
  }

  showSignature()
  {
  
    this.router.navigate(['signaturePanel','mainPanel']);
  }

}
