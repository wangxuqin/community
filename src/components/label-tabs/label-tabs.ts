import { Input, Output, EventEmitter, Component } from '@angular/core';

/**
 * Generated class for the LabelTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'label-tabs',
  templateUrl: 'label-tabs.html'
})
export class LabelTabsComponent {

  @Input() titles: any;

  constructor() {

  }

  ngAfterContentInit()
  {
    this.initTab();
  }

  initTab(){
    const tabs = document.getElementsByClassName('km-tabs-tab');
    const slider = document.getElementsByClassName('km-tabs-presentation-slider')[0] as HTMLElement;
    const line = document.getElementsByClassName('km-tabs-presentation-slider-line')[0] as HTMLElement;
    var deta = 50;
    if(tabs.length > 0 ){
      deta = (100 / tabs.length);
    }

    if(tabs.length > 0 ){
      (slider as HTMLElement).style.width = deta + "%";
    }

    const indexTabs = [];
    for(var i = 0; i < tabs.length; i++){
      const tab = (tabs[i] as HTMLElement);
      tab.style.width = deta + "%";
      indexTabs.push(tab);

      const title = (tab.getElementsByTagName("a")[0] as HTMLElement).textContent
      tab.addEventListener("click", () => {
        var index = indexTabs.indexOf(tab);
        slider.style.left = (deta * index) + "%";
        line.textContent = title;
      });
    }
  }
}
