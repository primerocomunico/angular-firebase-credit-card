export class Card {
    id?: string;
    owner: string = '';
    cardNumber: string = '';
    expiredDate: string = '';
    cvv: number = 0;
    createdDate: Date;
    updateDate: Date;

    constructor(owner: string, cardNumber: string, expiredDate: string, cvv: number) {
        this.owner = owner;
        this.cardNumber = cardNumber;
        this.expiredDate = expiredDate;
        this.cvv = cvv;
        this.createdDate = new Date();
        this.updateDate = new Date();
    }
}
