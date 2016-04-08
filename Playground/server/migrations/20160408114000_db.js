exports.up = function(knex, Promise) {

	return knex.schema.createTable('Company', function(table){
            table.increments('Id').primary();
            table.string('Name');
            table.string('AddressLine1');
            table.string('AddressLine2');
            table.string('City');
            table.string('PostCode');
            table.string('Comments');
            
        }).then(() =>
        
        knex.schema.createTable('Contact', function(table) {
            table.increments('Id').primary();
            table.integer('CompanyId')
                .unsigned()
                .references('Id')
                .inTable('Company');
            table.string('FirstName');
            table.string('LastName');
            table.string('WorkPhone');
            table.string('MobilePhone');
            table.string('Fax');
            table.string('Email');
            table.string('Position');
            table.timestamps();
            
        }).then(() =>
        
        knex.schema.createTable('User', function(table) {
            table.increments('Id').primary();
            table.integer('ContactId')
                .unsigned()
                .references('Id')
                .inTable('Contact');
            table.string('Roles');
            table.timestamps();
        })
    ));    
};

exports.down = function(knex, Promise) {

	return Promise.all([
        knex.schema.dropTable('Contact'),
        knex.schema.dropTable('User'),
        knex.schema.dropTable('Company')
    ])
  
};