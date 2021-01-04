class User{
//NOTE: defining the variables and their type for the object
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    password_hash: string;
//NOTE: constructor for the object, we are just using and underscore in front of the value to differentiate
    constructor(_id: number, _first_name : string, _last_name: string, _email: string, _phone: string, _password: string, _password_hash: string){
        this.id = _id;
        this.first_name = _first_name;
        this.last_name = _last_name;
        this.email = _email;
        this.phone = _phone;
        this.password = _password;
        this.password_hash = _password_hash
    }

}
//NOTE: typescript supports regular exporting statements, does not need module.exports
export {User}