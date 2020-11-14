import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from './notes-list/notes-list.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {NoteEditComponent} from './note-edit/note-edit.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesListComponent
  },
  {
    path: 'notes/new-note',
    component: NoteEditComponent,
    data: {isEdit : false},
  },
  {
    path: 'notes/:id',
    component: NoteEditComponent,
    data: {isEdit : true},
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }

export const noteRoutingComponents = [NoteEditComponent, NotesListComponent];
