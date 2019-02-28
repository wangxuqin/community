import { Input, Output, EventEmitter, Component, ViewChild, ElementRef } from '@angular/core';
import { linkToSegment } from 'ionic-angular/umd/navigation/nav-util';

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
  @ViewChild("tabsGroup") tabsGroup:ElementRef;
  @ViewChild("slider") slider:ElementRef;
  @ViewChild("line") line:ElementRef;
  @Input() titles:any = [];
  @Input() index:number;
  @Output() onTabChanged = new EventEmitter();
  private indexTabs:any = [];
  private deta:number = 50;


  constructor() {
  }

  ngAfterViewInit()
  {
    this.initTab();
  }

  initTab()
  {
    const tabs = this.tabsGroup.nativeElement.getElementsByClassName("km-tabs-tab");
    
    this.deta = 50;
    if(tabs.length > 0 ){
      this.deta = (100 / tabs.length);
    }

    if(this.index < 0) {
      this.index = 0;
    }

    if(this.index > tabs.length){
      this.index = tabs.length;
    }

    if(tabs.length > 0 ){
      this.slider.nativeElement.style.width = this.deta + "%";
    }

    for(var i = 0; i < tabs.length; i++){
      const tab = (tabs[i] as HTMLElement);
      tab.style.width = this.deta + "%";
      this.indexTabs.push(tab);
      tab.addEventListener("click", ()  => {
        this.onTabClick(tab);
      });

      if(this.index == i){
        this.onTabClick(tab);
      }
    }
  }

  private onTabClick(tab:HTMLElement){
     const title = (tab.getElementsByTagName("a")[0] as HTMLElement).textContent
     var index = this.indexTabs.indexOf(tab);
     this.index = index;
     this.slider.nativeElement.style.left = (this.deta * index) + "%";
     this.line.nativeElement.textContent = title;

     this.indexTabs.forEach(t => {
        t.classList.add("km-tab-unselected");
     });
     
     tab.classList.remove("km-tab-unselected");

     setTimeout(() => {
        this.onTabChanged.emit(this.index);
     }, 500);
  }
}
