const Sequelize = require('sequelize');
const db = require('../index');

const Illness = db.define('illness',{

name:{
    type:Sequelize.STRING,

},
beginDate:{
    type:Sequelize.DATE,

},
endDate:{
    type:Sequelize.DATE,
},

PatientFK: {
    type: Sequelize.INTEGER,
  },
},{
    freezeTableName:true,
    timestamps: false
})
Illness.sync({alter: true});

module.exports = Illness;