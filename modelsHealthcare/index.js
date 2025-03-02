



const { Sequelize } = require('sequelize');

const Hospital = require('./Hospital');
const Doctor = require ('./Doctor');
const Patient = require ('./Patient');
const Illness = require ('./Illness');
const Vaccination = require('./Vaccination');
const InternationalCodes = require('./InternationalCodes');

Doctor.belongsTo(Hospital, { foreignKey: 'HospitalFK', onDelete: 'CASCADE' });
Hospital.hasMany(Doctor, { foreignKey: 'HospitalFK', onDelete: 'CASCADE' });

Patient.belongsTo(Doctor, { foreignKey: 'DoctorFK', onDelete: 'CASCADE' });
Doctor.hasMany(Patient, { foreignKey: 'DoctorFK', onDelete: 'CASCADE' });

Illness.belongsTo(Patient, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });
Patient.hasMany(Illness, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });

Vaccination.belongsTo(Patient, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });
Patient.hasMany(Vaccination, { foreignKey: 'PatientFK', onDelete: 'CASCADE' });



module.exports = {
  InternationalCodes,
    Hospital,
    Doctor,
    Patient,
    Illness,
    Vaccination,
  };

