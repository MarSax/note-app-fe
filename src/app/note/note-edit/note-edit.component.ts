import {Component, OnInit} from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note-service/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  public note!: Note;
  public noteId = -1;
  public isEditPage!: boolean;
  public noteFormGroup!: FormGroup;

  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isEditPage = this.route.snapshot.data.isEdit;
    this.getNoteIdFromPath();
    this.initializeNoteFormGroup();
    this.initializeNote(this.isEditPage);
  }

  private initializeNote(isEditPage: boolean): void {
    if (!isEditPage) {
      this.note = this.getDefaultNote();
    } else {
      this.getNoteById(this.noteId);
    }
  }

  private initializeNoteFormGroup(): void {
    this.noteFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  private getNoteIdFromPath(): void {
    this.route.params.subscribe(value => {
      this.noteId = +value.id;
    });
  }

  public getNoteById(noteId: number): void {
    this.noteService.findNoteById(noteId).subscribe((note: Note) => {
      this.note = note;
      if (this.isEditPage) {
        this.noteFormGroup.patchValue({
          title: this.note.title,
          description: this.note.description
        });
      }
    });
  }

  public getDefaultNote(): Note {
    return {
      id: -1,
      title: '',
      description: ''
    };
  }

  public saveOrUpdateNote(): void {
    this.note = this.noteFormGroup.value;
    if (!this.isEditPage) {
      this.noteService.saveNote(this.note).subscribe((note: Note) => {
        this.note = note;
      });
    } else {
      this.note.id = this.noteId;
      this.noteService.updateNote(this.note).subscribe((note: Note) => {
        this.note = note;
      });
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
