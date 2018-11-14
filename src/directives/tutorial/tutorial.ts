import { Directive,   Input,HostListener } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TutorialDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[tutorial]', // Attribute selector
 })
export class Tutorial {

  constructor(private alertCtrl: AlertController) {
  }
  @Input('conteudo') conteudo: any[];
  interval: any;
  @HostListener('click', ['$event.target'])
  onClick(){
    var i=0;
    this.getNextConteuco(i);
      }
  getNextConteuco(i:number){
    let alert = this.alertCtrl.create({
      title: 'Tutorial',
      subTitle:this.conteudo[i],
      buttons: [ { text: 'OK',
      handler: () => {
        i++;
        if(i<this.conteudo.length){
          this.getNextConteuco(i);
        }
      }
      }]
    });
    alert.present();
  }
}
