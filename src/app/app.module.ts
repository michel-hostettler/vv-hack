import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatStepperModule,
  MatRadioModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE
} from '@angular/material';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KurzArbeitVoranmeldungListComponent } from './kurz-arbeit-voranmeldung-list/kurz-arbeit-voranmeldung-list.component';
import { AnfrageProgressComponent } from './anfrage-progress/anfrage-progress.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { MessageViewComponent } from './message-view/message-view.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { StatisticComponent } from './statistic/statistic.component';
import {CdkTableModule} from '@angular/cdk/table';
import { FragenComponent } from './fragen/fragen.component';
import { AbrechnungsformComponent } from './abrechnungsform/abrechnungsform.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { StatisticChartComponent } from './statistic-chart/statistic-chart.component';
import {PaginationKurzarbeit} from './kurz-arbeit-voranmeldung-list/PaginationKurzarbeit';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    KurzArbeitVoranmeldungListComponent,
    AnfrageProgressComponent,
    DocumentUploadComponent,
    CustomerViewComponent,
    MessageViewComponent,
    MessageFormComponent,
    StatisticComponent,
    FragenComponent,
    AbrechnungsformComponent,
    StatisticChartComponent,
  ],
  imports: [
    ReactiveFormsModule,
    NgApexchartsModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatRadioModule,
    NgxExtendedPdfViewerModule,
    MatTabsModule,
    AngularFontAwesomeModule,
    MatCardModule,
    CdkTableModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: PaginationKurzarbeit
    },
    {provide: MAT_DATE_LOCALE, useValue: 'de'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
