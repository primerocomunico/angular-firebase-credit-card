import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable, Subject } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private card$ = new Subject<any>();

  constructor(private firebase: AngularFirestore) { }

  saveCard(card: Card): Promise<any> {
    return this.firebase.collection('cards').add(card);
  }

  getCards(): Observable<any> {
    return this.firebase.collection('cards', ref => ref.orderBy('createdDate', 'desc')).snapshotChanges();
  }

  deleteCard(id: string): Promise<any> {
    return this.firebase.collection('cards').doc(id).delete();
  }

  addEditCard(card: Card) {
    this.card$.next(card)
  }
  getEditCard(): Observable<Card> {
    return this.card$.asObservable();
  }

  editCard(id: string, card: any): Promise<any> {
    return this.firebase.collection('cards').doc(id).update(card);
  }
}
