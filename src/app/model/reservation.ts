//una clase siempre debe tener export para poder ser usada
export class Reservation {

    _id: number;
    _name: string;
    _surname: string;
    _email: string;
    _phone: string;
    _reservation: Date;
    _reservationTime: string;


    constructor(pId: number, pName: string, pSurname: string, pEmail: string, pPhone: string,
        pReservation: Date, pReservationTime: string) {
        this._id = pId;
        this._name = pName;
        this._surname = pSurname;
        this._email = pEmail;
        this._phone = pPhone;
        this._reservation = pReservation;
        this._reservationTime = pReservationTime;

    }

    getId(): number {
        return this._id;
    }
    getName(): string {
        return this._name;
    }
    getSurname(): string {
        return this._surname;
    }
    getEmail(): string {
        return this._email;
    }
    getPhone(): string {
        return this._phone;
    }
    getReservation(): Date {
        return this._reservation;
    }
    getReservationTime(): string {
        return this._reservationTime;
    }

    setId(pId: number): void {
        this._id = pId;
    }
    setName(pName: string): void {
        this._name = pName;
    }
    setSurname(pSurname: string): void {
        this._surname = pSurname;
    }
    setEmail(pEmail: string): void {
        this._email = pEmail;
    }
    setPhone(pPhone: string): void {
        this._phone = pPhone;
    }
    setReservation(pReservation: Date): void {
        this._reservation = pReservation;
    }
    setReservationTime(pReservationTime: string): void {
        this._reservationTime = pReservationTime;
    }





}
