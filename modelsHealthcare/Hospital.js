const Sequelize = require('sequelize');
const db = require('../index');

const Hospital = db.define('hospital',{

name:{
    type:Sequelize.STRING,

},
quantityEmployees:{
    type:Sequelize.INTEGER,
 
},
address:{
    type:Sequelize.STRING,

},
},{
     timestamps: false,
    freezeTableName:true,
   
})
Hospital.sync({alter: true});

module.exports = Hospital;