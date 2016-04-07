import {Bookshelf} from './bookshelf';

export class User extends Bookshelf.Model<User> {
    
    get tableName() { return 'users'; }
}