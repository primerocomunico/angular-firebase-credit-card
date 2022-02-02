import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../models/card';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  title: string = 'Agregar tarjeta';
  button: string = 'Guardar';
  id: string | undefined;

  constructor(private fb: FormBuilder, private _cardService: CardService, private toastr: ToastrService) { 
    this.form = this.fb.group({
      owner: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expiredDate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  ngOnInit(): void {
    this._cardService.getEditCard().subscribe(data => {
      this.title = 'Editar tarjeta';
      this.button = 'Actualizar';
      this.id = data.id;
      this.form.patchValue({
        owner: data.owner,
        cardNumber: data.cardNumber,
        expiredDate: data.expiredDate,
        cvv: data.cvv
      })
    })
  }

  saveCard() {
    if(this.id === undefined) {
      // Creamos una nueva tarjeta
      this.newCard();
    } else {
      // Editamos una tarjeta existente
      this.editCard(this.id);
    }
  }

  newCard() {
    this.loading = true;
    const card: Card = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expiredDate: this.form.value.expiredDate,
      cvv: this.form.value.cvv,
      createdDate: new Date(),
      updateDate: new Date()
    }
    this._cardService.saveCard(card)
      .then((data) => {
        this.toastr.success('Tarjeta registrada con éxito', '¡Nueva tarjeta!', { timeOut: 3000 });
        this.loading = false;
        this.form.reset();
      })
      .catch((err) => {
        this.toastr.error('Inténtalo de nuevo más tarde', '¡Hubo un error!', { timeOut: 3000 });
        this.loading = false;
        console.log(err)
      })
  }

  editCard(id: string) {
    this.loading = true;
    const card: any = {
      owner: this.form.value.owner,
      cardNumber: this.form.value.cardNumber,
      expiredDate: this.form.value.expiredDate,
      cvv: this.form.value.cvv,
      updateDate: new Date()
    }
    this._cardService.editCard(id, card)
      .then((data) => {
        this.toastr.info('Tarjeta actualizada con éxito', '¡Tarjeta actualizada!', { timeOut: 3000 });
        this.loading = false;
        this.title = 'Agregar tarjeta';
        this.button = 'Guardar';
        this.form.reset();
      })
      .catch((err) => {
        this.toastr.error('Inténtalo de nuevo más tarde', '¡Hubo un error!', { timeOut: 3000 });
        this.loading = false;
        console.log(err)
      })
  }

}
