import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../models/card';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardsList: Card[] = [];
  loading: boolean = false;

  constructor(private _cardService: CardService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.loading = true;
    this._cardService.getCards().subscribe((data) => {
      this.loading = false;
      this.cardsList = [];
      data.forEach((card: any) => {
        this.cardsList.push({
          id: card.payload.doc.id,
          ...card.payload.doc.data()
        })
      });
    })
  }

  deleteCard(id: any) {
    this._cardService.deleteCard(id)
      .then((data) => {
        this.toastr.warning('Tarjeta eliminada con éxito', '¡Tarjeta eliminada!', { timeOut: 3000 });
      })
      .catch((err) => {
        this.toastr.error('Inténtalo de nuevo más tarde', '¡Hubo un error!', { timeOut: 3000 });
      })
  }

  editCard(card: Card) {
    this._cardService.addEditCard(card)
  }

}
