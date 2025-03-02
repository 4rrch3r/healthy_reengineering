const Sequelize = require('sequelize');
const db = require('../index');

 const Vaccination = db.define('vaccination',{

name:{
    type:Sequelize.STRING,

},
vaccinationDate:{
    type:Sequelize.DATE,

},
VaccinationEndDate :{
    type:Sequelize.DATE,
},
PatientFK: {
    type: Sequelize.INTEGER,
  },

},{
    freezeTableName:true,
    timestamps: false
})
Vaccination.sync({alter: true});
//Vaccination.sync({force: true});
//Vaccination.sync({alter: true});

module.exports = Vaccination;