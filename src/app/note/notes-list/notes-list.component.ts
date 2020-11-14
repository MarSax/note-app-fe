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
}
