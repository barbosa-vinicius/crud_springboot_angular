import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusersService } from './musers.service';
import { MusersModule } from './musers/musers.module';
import { TemplateModule } from './template/template.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        TemplateModule,
        MusersModule,
        BrowserAnimationsModule,
    ],
    providers: [MusersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
