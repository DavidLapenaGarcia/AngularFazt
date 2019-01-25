//una clase siempre debe tener export para poder ser usada
export class Reservation {

     id             : number;
     name           : string;
     surname        : string;
     email          : string;
     phone          : string;
     reservation    : Date;
     reservationTime: string;


    constructor(pId: number, pName: string, pSurname: string, pEmail: string, pPhone: string,
        pReservation: Date, pReservationTime: string) {
        this.id              = pId;
        this.name            = pName;
        this.surname         = pSurname;
        this.email           = pEmail;
        this.phone           = pPhone;
        this.reservation     = pReservation;
        this.reservationTime = pReservationTime;

    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getSurname(): string {
        return this.surname;
    }
    getEmail(): string {
        return this.email;
    }
    getPhone(): string {
        return this.phone;
    }
    getReservation(): Date {
        return this.reservation;
    }
    getReservationTime(): string {
        return this.reservationTime;
    }

    setId(pId: number): void {
        this.id = pId;
    }
    setName(pName: string): void {
        this.name = pName;
    }
    setSurname(pSurname: string): void {
        this.surname = pSurname;
    }
    setEmail(pEmail: string): void {
        this.email = pEmail;
    }
    setPhone(pPhone: string): void {
        this.phone = pPhone;
    }
    setReservation(pReservation: Date): void {
        this.reservation = pReservation;
    }
    setReservationTime(pReservationTime: string): void {
        this.reservationTime = pReservationTime;
    }

}
