import { Directive,  HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[font-color]' // Attribute selector
})
export class FontColor  {
  isDirectiveActivity: boolean;
  constructor(private renderer : Renderer) {
    this.isDirectiveActivity=false;
  }
  @Input('color') newColor: string;
  @Input() defaultColor: string;
  @HostListener('click', ['$event.target'])
  onClick(){
     
      this.colorChange();
    }
    private colorChange() {
     if(!this.isDirectiveActivity){
      document.body.querySelectorAll('h2').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      }); 
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });
      document.body.querySelectorAll('h2').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      }); 
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });
      document.body.querySelectorAll('input').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      }); 
      document.body.querySelectorAll('h1').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      document.body.querySelectorAll('textarea').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      document.body.querySelectorAll('select').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      document.body.querySelectorAll('ion-label').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });
      document.body.querySelectorAll('h3').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      document.body.querySelectorAll('h4').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      document.body.querySelectorAll('h5').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });    
      document.body.querySelectorAll('h6').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      }); 
      document.body.querySelectorAll('ion-title').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });   
      document.body.querySelectorAll('div').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.newColor);
      });  
      this.isDirectiveActivity= true;
     }else{
      document.body.querySelectorAll('h2').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      }); 
      document.body.querySelectorAll('p').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });
      document.body.querySelectorAll('input').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      }); 
      document.body.querySelectorAll('h1').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      document.body.querySelectorAll('textarea').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      document.body.querySelectorAll('select').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      document.body.querySelectorAll('ion-label').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });
      document.body.querySelectorAll('h3').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      document.body.querySelectorAll('h4').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      document.body.querySelectorAll('h5').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });    
      document.body.querySelectorAll('h6').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      }); 
      document.body.querySelectorAll('ion-title').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });   
      document.body.querySelectorAll('div').forEach(element => {
        this.renderer.setElementStyle(element,'color',this.defaultColor);
      });  
      this.isDirectiveActivity= false;
    }
  }
}