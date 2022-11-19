const Sequelize = require('sequelize');

const sequelize = new Sequelize("blog-instituto-cultural", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com o banco.');
}).catch(function(){
    console.log('Não conectado com o banco.');
});

module.exports = sequelize;