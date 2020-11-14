import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './note-service/note.service';
import { noteRoutingComponents } from './note-routing.module';

@NgModule({
  declarations: [
    noteRoutingComponents
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NoteService,
  ]
})
export class NoteModule { }
