const Sequelize = require('sequelize');
const db = require('../index');

const Doctor = db.define('doctor',{

name:{
    type:Sequelize.STRING,

},
tel:{
    type:Sequelize.CHAR,

},
post:{
    type:Sequelize.STRING,
},
HospitalFK: {
    type: Sequelize.INTEGER,
  },
},{
    freezeTableName:true,
    timestamps: false
})

Doctor.sync({alter: true});
//Vaccination.sync({force: true});
module.exports = Doctor;