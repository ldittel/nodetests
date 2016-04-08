"use strict";
var cloneProperties = function (dest, source) {
    for (var k in dest)
        dest[k] = source[k];
    return dest;
};
var Company = (function () {
    function Company(id, Name, AddressLine1, AddressLine2, City, PostCode) {
        if (id === void 0) { id = null; }
        if (Name === void 0) { Name = null; }
        if (AddressLine1 === void 0) { AddressLine1 = null; }
        if (AddressLine2 === void 0) { AddressLine2 = null; }
        if (City === void 0) { City = null; }
        if (PostCode === void 0) { PostCode = null; }
        this.id = id;
        this.Name = Name;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.City = City;
        this.PostCode = PostCode;
    }
    Company.from = function (src) { return cloneProperties(new Company(), src); };
    Company.prototype.update = function (src) { return cloneProperties(this, src); };
    return Company;
}());
exports.Company = Company;
var Contact = (function () {
    function Contact(Id, CompanyId, FirstName, LastName, MobilePhone, Email) {
        if (Id === void 0) { Id = null; }
        if (CompanyId === void 0) { CompanyId = null; }
        if (FirstName === void 0) { FirstName = null; }
        if (LastName === void 0) { LastName = null; }
        if (MobilePhone === void 0) { MobilePhone = null; }
        if (Email === void 0) { Email = null; }
        this.Id = Id;
        this.CompanyId = CompanyId;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MobilePhone = MobilePhone;
        this.Email = Email;
    }
    Contact.from = function (src) { return cloneProperties(new Contact(), src); };
    Contact.prototype.update = function (src) { return cloneProperties(this, src); };
    return Contact;
}());
exports.Contact = Contact;
var User = (function () {
    function User(Id, ContactId, Username, Password, Roles) {
        if (Id === void 0) { Id = null; }
        if (ContactId === void 0) { ContactId = null; }
        if (Username === void 0) { Username = null; }
        if (Password === void 0) { Password = null; }
        if (Roles === void 0) { Roles = null; }
        this.Id = Id;
        this.ContactId = ContactId;
        this.Username = Username;
        this.Password = Password;
        this.Roles = Roles;
    }
    User.from = function (src) { return cloneProperties(new User(), src); };
    User.prototype.update = function (src) { return cloneProperties(this, src); };
    return User;
}());
exports.User = User;
//# sourceMappingURL=model.js.map