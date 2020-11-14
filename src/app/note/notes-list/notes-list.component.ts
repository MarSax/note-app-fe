import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note-service/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public noteList: Array<Note> = [
      {id: 1, title: 'ciao', description: 'provaprovaprovaprovaprovaprovaprovaprovaprovaprovaprovaprova'},
      {id: 2, title: 'ciao', description: 'provaprovaprovaprovaprovaprovaprovaprovaprovaprovaprovaprova'},
      {id: 3, title: 'ciao', description: 'provaprovaprovaprovaprovaprovaprovaprovaprovaprovaprovaprova'},
    ];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    // this.getAllNotes();
  }

  getAllNotes(): void {
    this.noteService.findAllNotes().subscribe((notes: Array<Note>) => {
      this.noteList = notes;
    });
  }
}
