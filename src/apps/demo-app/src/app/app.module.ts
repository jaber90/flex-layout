import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app-shell/app.component';
import {CustomMaterialModule} from './custom-material.module';
import {LAYOUT_CONFIG, BREAKPOINT_PROVIDERS} from './utils/breakpoints/custom-breakpoint';
import {DemoUtilsModule} from './utils/demo-utils.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    DemoUtilsModule,
    FlexLayoutModule.withConfig(LAYOUT_CONFIG),
  ],
  providers: [ ...BREAKPOINT_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
