
const cloneProperties = function<T>(dest: T,  source: any) {
        for(var k in dest)
        dest[k]=source[k];
        return dest;
    };

export class Company {
    
    constructor(
        public id : number = null,
        public Name: string = null, 
        public AddressLine1: string = null, 
        public AddressLine2: string = null, 
        public City: string = null, 
        public PostCode:string = null) { }
            
    static from(src:any) : Company { return cloneProperties(new Company(), src); }
    public update(src:any) : Company { return cloneProperties(this, src); }
}

export class Contact {  
      
    constructor(
        public Id : number = null,
        public CompanyId:number = null,
        public FirstName:string = null, 
        public LastName:string = null,
        public MobilePhone: string = null, 
        public Email: string = null) {}
        
    static from(src:any) : Contact { return cloneProperties(new Contact(), src); }
    public update(src:any) : Contact { return cloneProperties(this, src); }
}

export class User {
       
    constructor(
        public Id : number = null,
        public ContactId:number = null,
        public Username:string = null,
        public Password:string = null, 
        public Roles:string = null) {}
        
    static from(src:any) : User { return cloneProperties(new User(), src); }
    public update(src:any) : User { return cloneProperties(this, src); }
}