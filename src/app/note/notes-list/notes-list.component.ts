import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note-service/note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  public filteredNoteList: Array<Note> = [];
  public noteList: Array<Note> = [];

  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  public getAllNotes(): void {
    this.noteService.findAllNotes().subscribe((notes: Array<Note>) => {
      this.noteList = notes;
      this.filteredNoteList = notes;
    });
  }

  public goToEditPage(noteId: number): void {
    this.router.navigate([noteId], { relativeTo: this.route });
  }

  public goToNewPage(): void {
    this.router.navigate(['new-note'], { relativeTo: this.route });
  }

  public deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe();
    this.noteList = this.noteList.filter((note: Note) => note.id !== id);
  }

  public filterList(value: string): void {
    this.filteredNoteList = this.noteList.filter((note: Note) => {
      return !!(note.title.includes(value) || (note.description && note.description.includes(value)));
    });
  }

  public resetFullList(value: string): void {
    if (value === '') {
      this.filteredNoteList = this.noteList;
    }
  }
}
