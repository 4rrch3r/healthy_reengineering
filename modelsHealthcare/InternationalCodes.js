const Sequelize = require('sequelize');
const db = require('../index');

const InternationalCodes = db.define('internationalCodes',{

code:{
    type:Sequelize.STRING,

},
desc:{
    type:Sequelize.STRING,

},

},{
     timestamps: false,
    freezeTableName:true,
   
})
InternationalCodes.sync({alter: true});

module.exports = InternationalCodes;