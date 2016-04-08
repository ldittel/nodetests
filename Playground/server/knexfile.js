module.exports = {
    environment: 'development',
    development: {
        client: 'mysql',
        connection: 'mysql://bce53062067530:c0557571@eu-cdbr-west-01.cleardb.com/heroku_64bd81c6a9a9640?reconnect=true',
        pool:{
            min:2,
            max:10
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }    
}