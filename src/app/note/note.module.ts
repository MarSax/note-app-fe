import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteService} from './note-service/note.service';
import {noteRoutingComponents} from './note-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const materialModule = [MatToolbarModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule];

@NgModule({
  declarations: [
    noteRoutingComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule
  ],
  providers: [
    NoteService,
  ]
})
export class NoteModule { }
