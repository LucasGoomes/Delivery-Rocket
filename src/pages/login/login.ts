import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';
import { AuthProvider } from '../../providers/auth';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [

    trigger(

      'login', [

        transition(':enter', [

          style({

            opacity: 0

          }),

          animate("1s ease-in-out", style({

            opacity: 1

          }))

        ]),

        transition(':leave', [

          style({

            opacity: 0

          })

        ])

      ],

    ),

    trigger(

      'registro', [

        transition(':enter', [

          style({

            opacity: 0

          }),

          animate("1s ease-in-out", style({

            opacity: 1

          }))

        ]),

        transition(':leave', [

          style({

            opacity: 0

          })

        ])

      ],

    ),

  ]
})
export class LoginPage {
  login = true;
  register = false;

  loginForm = {
    email: '',
    password: ''
  }
  registerForm = {
    email: '',
    password: '',
    name: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider
  ) {
  }
  //EXIBIR REGISTRO
  exibirRegistrar() {
    this.login = false;
    this.register = true;

  }
  //EXIBIR LOGIN
  exibirLogar() {
    this.login = true;
    this.register = false;
  }

  //funcao login
  fazerLogin(){
    this.navCtrl.push(TabsPage);
  }
  //funcao registro
  criarNovaConta(){
    this.authProvider.register(this.registerForm)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  ionViewDidLoad() {

  }

}
