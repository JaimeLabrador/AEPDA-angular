import { ReactiveFormsModule } from '@angular/forms';
import { PaintRoutingModule } from './paint-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaintComponent } from './paint/paint.component';
import { PaintService } from 'src/app/shared/services/paint-service/paint.service';



@NgModule({
  declarations: [
    PaintComponent
  ],
  imports: [
    CommonModule,
    PaintRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PaintService
  ]
})
export class PaintModule { }
