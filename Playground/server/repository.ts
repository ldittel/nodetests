import * as domain from './model';
import {Bookshelf} from './bookshelf';

class Repository {
    
    get Companies() { return new Company().fetch(); }
    get User() { return new User().fetch(); }
    
    AddCompany(c: domain.Company) : Promise<domain.Company>{
        return new Company(c).save().then(saved => c.update(saved.toJSON()));
    }
}

export = new Repository();

class Company extends Bookshelf.Model<Company> {
    get tableName() { return 'Company'; }
}
class Contact extends Bookshelf.Model<Contact> {
    get tableName() { return 'Contact'; }
}
class User extends Bookshelf.Model<User> {
    get tableName() { return 'User'; } 
}

var cc = domain.Company.from({ Name:'Saatchi Gallery', AddressLine1:'Duke Of York\'s HQ', AddressLine2:'King\'s Rd', City:'London', PostCode:'SW3 4RY' });

console.log(cc);
console.log('Saving...');
new Repository().AddCompany(cc).then(x => console.log(x));