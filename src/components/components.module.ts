import { NgModule } from '@angular/core';
import { CounterInputComponent } from './counter-input/counter-input';
import { LabelTabsComponent } from './label-tabs/label-tabs';
@NgModule({
	declarations: [CounterInputComponent,
    LabelTabsComponent],
	imports: [],
	exports: [CounterInputComponent,
    LabelTabsComponent]
})
export class ComponentsModule {}
