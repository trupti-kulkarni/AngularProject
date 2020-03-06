export class User{
     id: number;
     name : string;
     username: string;
     email : string; 
     company : Company;
     address : Address;
     phone: string;
     website: string;
     geo : Geolocation;
}

class Address{
    street: string;
    suite: string;
     city: string;
    zipcode :number;
}
class Company{
    name: string;
    catchPhrase: string;
    bs: string;
}
