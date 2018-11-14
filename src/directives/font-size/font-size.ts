import { Directive,  Renderer, Input,HostListener } from '@angular/core';

/**
 * Generated class for the FontSizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[font-size]' // Attribute selector
})
export class FontSize {

  isDirectiveActivity: boolean;
  constructor( private renderer : Renderer) {
    this.isDirectiveActivity=false;
  }
  @Input('newsize') newSize: string;
  @Input() defaultSize: string;
  @HostListener('click', ['$event.target'])
  onClick(){
     
      this.sizeChange();
    }
    private sizeChange() {
     if(!this.isDirectiveActivity){
      document.body.querySelectorAll('h2').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
      }); 
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
      });
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });
      document.body.querySelectorAll('input').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            }); 
      document.body.querySelectorAll('h1').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });  
      document.body.querySelectorAll('textarea').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
      });  
      document.body.querySelectorAll('select').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });  
      document.body.querySelectorAll('ion-label').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });
      document.body.querySelectorAll('h3').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });  
      document.body.querySelectorAll('h4').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });  
      document.body.querySelectorAll('h5').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });    
      document.body.querySelectorAll('h6').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            }); 
      document.body.querySelectorAll('ion-title').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });   
      document.body.querySelectorAll('div').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.newSize);
            });  
      this.isDirectiveActivity= true;
     }else{
      document.body.querySelectorAll('h2').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
            }); 
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });
      document.body.querySelectorAll('input').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      }); 
      document.body.querySelectorAll('h1').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      document.body.querySelectorAll('textarea').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      document.body.querySelectorAll('select').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      document.body.querySelectorAll('ion-label').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });
      document.body.querySelectorAll('h3').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      document.body.querySelectorAll('h4').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      document.body.querySelectorAll('h5').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });    
      document.body.querySelectorAll('h6').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      }); 
      document.body.querySelectorAll('ion-title').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });   
      document.body.querySelectorAll('div').forEach(element => {
        this.renderer.setElementStyle(element,'font-size',this.defaultSize);
      });  
      this.isDirectiveActivity= false;
    }
  }
}
