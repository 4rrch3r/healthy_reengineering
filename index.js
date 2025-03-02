const express = require('express');
const PORT = 3000;
const Models = require('./modelsHealthcare/index')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const { Sequelize } = require("sequelize");
const router = require('express').Router();
const hospitalController = require('./controllers/hospitalController');
const doctorController = require('./controllers/doctorController');
const illnessController = require('./controllers/illnessController');
const patientController = require('./controllers/patientController');
const vaccinationController = require('./controllers/vaccinationController');
const internationalCodesController = require('./controllers/internationalCodesController');
const db = new Sequelize('nodePg','postgres','root',{
    host:'localhost',
    dialect:'postgres',
    operatorsAliases:false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        
        idle:10000
    },    
    });
db.authenticate().then(()=>console.log('Database connected')).catch(err=>console.log('Error ' + err))

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/hospital',hospitalController.createHospital);
router.get('/hospital',hospitalController.getHospitals);
router.get('/hospital/:id',hospitalController.getHospital);
router.put('/hospital/:id',hospitalController.updateHospital);
router.delete('/hospital/:id',hospitalController.deleteHospital);

router.post('/doctor',doctorController.createDoctor);
router.get('/doctor',doctorController.getDoctors);
router.get('/doctor/:id',doctorController.getDoctor);
router.put('/doctor/:id',doctorController.updateDoctor);
router.delete('/doctor/:id',doctorController.deleteDoctor);


router.post('/illness',illnessController.createIllness);
router.get('/illness',illnessController.getIllnesses);
router.get('/illness/:id',illnessController.getIllness);
router.put('/illness/:id',illnessController.updateIllness);
router.delete('/illness/:id',illnessController.deleteIllness);

router.post('/patient',patientController.createPatient);
router.get('/patient',patientController.getPatients);
router.get('/patient/:id',patientController.getPatient);
router.put('/patient/:id',patientController.updatePatient);
router.delete('/patient/:id',patientController.deletePatient);

router.post('/vaccination',vaccinationController.createVaccination);
router.get('/vaccination',vaccinationController.getVaccinations);
router.get('/vaccination/:id',vaccinationController.getVaccination);
router.put('/vaccination/:id',vaccinationController.updateVaccination);
router.delete('/vaccination/:id',vaccinationController.deleteVaccination);

router.post('/internationalCode',internationalCodesController.createInternationalCode);
router.post('/internationalCode/code',internationalCodesController.getInternationalCodeByCode);
router.get('/internationalCode',internationalCodesController.getInternationalCodes);
router.get('/internationalCode/:id',internationalCodesController.getInternationalCode);
router.put('/internationalCode/:id',internationalCodesController.updateInternationalCode);
router.delete('/internationalCode/:id',internationalCodesController.deleteInternationalCode);

app.use('/',router)




module.exports=db;
// app.get('/',async(req,res) =>{
    
//     //await Models.Hospital.create({name:"Hospital Sviatoshyn",quantityEmployees:"20",address:"Akademika Vernadskogo 5"})
//      //await Models.Doctor.create({name:"Doctor Olena",tel:'1234567',post:'doctor',HospitalFK:1})
//      //await Models.Patient.create({name:"patient igor", tel:"1212124",email:"1212124@gmail.com",DoctorFK:1})
//      //await Models.Illness.create({name:"illness corona",beginDate:"2021-01-17",endDate:"2022-02-19",PatientFK:1})
//     //  await Models.Vaccination.create({name:"vispa",vaccinationDate:"2022-01-17",VaccinationEndDate:"2022-02-20",PatientFK:1})
     
//     Models.Hospital.findAll()
//     .then(hospitals=>{
//         console.log(`\n\n\n\nall hospitals>>\n\n\n`+JSON.stringify(hospitals,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Doctor.findAll()
//     .then(doctors=>{
//         console.log(`\n\n\n\nall doctors>>\n\n\n`+JSON.stringify(doctors,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Patient.findAll()
//     .then(patients=>{
//         console.log(`\n\n\n\nall patients>>\n\n\n`+JSON.stringify(patients,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Illness.findAll()
//     .then(illness=>{
//         console.log(`\n\n\n\nall illness>>\n\n\n`+JSON.stringify(illness,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Vaccination.findAll()
//     .then(vaccinations=>{
//         console.log(`\n\n\n\nall vaccinations>>\n\n\n`+JSON.stringify(vaccinations,null));
        
//     })
//     .catch(err=>console.log(err))

//     res.sendStatus(200);
// })

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})
console.log('App is up')