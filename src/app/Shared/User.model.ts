export class AuthUser{
    constructor(

    public email: string,
    public id:string,
    private _token:string,
    private _tokenExpirationDate:Date
    ){}

    
}   