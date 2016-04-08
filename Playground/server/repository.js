"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var domain = require('./model');
var bookshelf_1 = require('./bookshelf');
var Repository = (function () {
    function Repository() {
    }
    Object.defineProperty(Repository.prototype, "Companies", {
        get: function () { return new Company().fetch(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "User", {
        get: function () { return new User().fetch(); },
        enumerable: true,
        configurable: true
    });
    Repository.prototype.AddCompany = function (c) {
        return new Company(c).save().then(function (saved) { return c.update(saved.toJSON()); });
    };
    return Repository;
}());
var Company = (function (_super) {
    __extends(Company, _super);
    function Company() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Company.prototype, "tableName", {
        get: function () { return 'Company'; },
        enumerable: true,
        configurable: true
    });
    return Company;
}(bookshelf_1.Bookshelf.Model));
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Contact.prototype, "tableName", {
        get: function () { return 'Contact'; },
        enumerable: true,
        configurable: true
    });
    return Contact;
}(bookshelf_1.Bookshelf.Model));
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(User.prototype, "tableName", {
        get: function () { return 'User'; },
        enumerable: true,
        configurable: true
    });
    return User;
}(bookshelf_1.Bookshelf.Model));
var cc = domain.Company.from({ Name: 'Saatchi Gallery', AddressLine1: 'Duke Of York\'s HQ', AddressLine2: 'King\'s Rd', City: 'London', PostCode: 'SW3 4RY' });
console.log(cc);
console.log('Saving...');
new Repository().AddCompany(cc).then(function (x) { return console.log(x); });
module.exports = new Repository();
//# sourceMappingURL=repository.js.map