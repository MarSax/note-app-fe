import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from './notes-list/notes-list.component';
import {NoteDetailComponent} from './note-detail/note-detail.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesListComponent
  },
  {
    path: 'notes/:id',
    component: NoteDetailComponent
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

export const noteRoutingComponents = [NoteDetailComponent, NotesListComponent];
