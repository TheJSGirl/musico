const environment = process.env.NODE_ENV || 'development';

if(environment === 'development') {
    process.env.PORT = 3000;
    
}

console.log('***Working environment is: ', environment);

export const db = {
    database: 'musico',
    username: 'root', 
    password: 'pinku'
}