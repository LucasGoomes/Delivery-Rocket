import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AcaoPage} from '../acao/acao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pet: string = "puppies";
  constructor(public navCtrl: NavController) {

  }
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  //acao detalhada
  detalhe(){
    this.navCtrl.push(AcaoPage);
  }
}
