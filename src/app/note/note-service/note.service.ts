import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Note} from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  public findAllNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(environment.LOCAL_ENVIRONMENT + 'notes');
  }

  public findNoteById(noteId: number): Observable<Note> {
    return this.http.get<Note>(environment.LOCAL_ENVIRONMENT + `notes/${noteId}`);
  }

  public saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(environment.LOCAL_ENVIRONMENT + `notes/save`, note);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(environment.LOCAL_ENVIRONMENT + `notes/update`, note);
  }

  public deleteNote(noteId: number): Observable<void> {
    return this.http.delete<void>(environment.LOCAL_ENVIRONMENT + `notes/delete/${noteId}`);
  }
}
