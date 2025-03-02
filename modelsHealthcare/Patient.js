const Sequelize = require('sequelize');
const db = require('../index');

const Patient = db.define('patient',{

name:{
    type:Sequelize.STRING,

},
tel:{
    type:Sequelize.CHAR,

},
email:{
    type:Sequelize.STRING,
},
DoctorFK: {
    type: Sequelize.INTEGER,
  },

},{
    freezeTableName:true,
    timestamps: false
})

Patient.sync({alter: true});

module.exports = Patient;