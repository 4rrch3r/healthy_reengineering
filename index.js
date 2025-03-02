const express = require('express');
const db = require('./configDB/db')
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require('./routes/index')
const bodyParser = require('body-parser');
const cors = require('cors')

db.authenticate().then(()=>console.log('Database connected')).catch(err=>console.log('Error ' + err))

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/',routes.hospitalRoutes)
app.use('/',routes.doctorRoutes)
app.use('/',routes.illnessRoutes)
app.use('/',routes.patientRoutes)
app.use('/',routes.vaccinationRoutes)
app.use('/',routes.internationalCodesRoutes)

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})