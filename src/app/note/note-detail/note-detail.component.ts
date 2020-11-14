import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note-service/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void { }

}
