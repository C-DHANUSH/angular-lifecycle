import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { ConstructorChildComponent } from './constructor-child/constructor-child.component';
import { OnchangeParentComponent } from './onchange-parent/onchange-parent.component';
import { OnchangeChildComponent } from './onchange-child/onchange-child.component';
import { DocheckComponent } from './docheck/docheck.component';
import { AftercontentinitComponent } from './aftercontentinit/aftercontentinit.component';
import { AfterviewComponent } from './afterview/afterview.component';
import { OnDestroyComponent } from './on-destroy/on-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    ConstructorChildComponent,
    OnchangeParentComponent,
    OnchangeChildComponent,
    DocheckComponent,
    AftercontentinitComponent,
    AfterviewComponent,
    OnDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
