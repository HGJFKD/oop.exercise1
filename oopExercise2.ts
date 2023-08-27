import { log } from "console";

// class Person
class Person {
    firstName : String;
    lastName :String;

    constructor (firstName: String, lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    };

    setInfo(){
        return this
    }
};

// class Patient extends Person
class Patient extends Person {
    patientID :number;

    constructor(firstName: String, lastName:String, patientID :number){
        super(firstName, lastName);
        this.patientID = patientID; 
    };
};

// class Doctor extends Person
class Doctor extends Person {
    doctorID : number;
    specialization : string;

    constructor (firstName: String, lastName:String, doctorID : number, specialization : string){
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
}

// class Appointment
class Appointment {
    patient : Patient ;
    doctor : Doctor;
    date: Date = new Date();  
    time: number;

    constructor (patient : Patient, doctor : Doctor, date: Date = new Date(), time: number){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date
        this.time = time;
    }

    setInfo(){
        return this;
    };
};

// class Hospital
class Hospital {
    patients : Patient[];
    doctors : Doctor[];
    appointments : Appointment[];
    hospitalName: string;

    constructor (patients : Patient[], doctors : Doctor[],
        appointments : Appointment[], hospitalName: string) {
            this.patients = patients;
            this.doctors = doctors;
            this.appointments = appointments;
            this.hospitalName = hospitalName;
    };

    // Add patient
    addPatient (patient : Patient) : void {
        this.patients.push(patient);
        console.log("The patient was successfully added");
    };

    // Add doctor
    addDoctor (doctor : Doctor) : void {
        this.doctors.push(doctor);
        console.log("The doctor was successfully added");
    };

    // Add appointment 
    addAppointment (appointment  : Appointment ) : void {
        this.appointments.push(appointment);
        console.log("The appointment  was successfully added");
    };

    // console.log appointments func
    getAppointment(arrAppointments : Appointment [] = this.appointments) : void {
        arrAppointments.forEach(appointment =>
            console.log(appointment.setInfo()));
    };

    // Filter array appointments by doctor id
    getAppointmentByDoctorId(id: number) : void {
        const appointmentByDoctorId = this.appointments.filter(appointment => appointment.doctor.doctorID === id)
        this.getAppointment(appointmentByDoctorId)
    };

    // Filter array appointments by patien id
    getAppointmentByPatientId(id: number) : void {
        const appointmentByPatienId = this.appointments.filter(appointment => appointment.patient.patientID === id)
        this.getAppointment(appointmentByPatienId)
    }; 

    // Filter array appointments by date
    getAppointmentByDate(date : Date) : void {
        const appointmentByDate = this.appointments.filter(appointment => appointment.date.getDate() === date.getDate())
        this.getAppointment(appointmentByDate)
    };
};

// Patients
const moshe = new Patient ("moshe","moshe",100);
const chaim = new Patient ("chaim","chaim",101);
const israel = new Patient ("israel","israel",102);
const amitHaGever = new Patient ("amitHaGever","amitHaGever",103);
const natan = new Patient ("natan","natan",104);
const miryam = new Patient ("miryam","miryam",105);

// Doctors
const drGay = new Doctor ("gay","israel",800, "Otolaryngology");
const drSharon = new Doctor ("sharon","hadar",801, "Family");
const drLas = new Doctor ("Yoram","las",802, "Corona");

// Appointments
const appointment1 = new Appointment(moshe, drGay, new Date ("2023-08-27"), 25);
const appointment2 = new Appointment(chaim, drGay, new Date ("2023-08-29"), 25);
const appointment3 = new Appointment(israel, drSharon, new Date ("2023-07-27"), 25);
const appointment4 = new Appointment(amitHaGever, drLas, new Date ("2023-08-25"), 25);
const appointment5 = new Appointment(natan, drSharon, new Date ("2023-08-27"), 25);
const appointment6 = new Appointment(miryam, drLas, new Date ("2023-08-29"), 25);

// Hospital === 
const patients : Patient[] = [];
const doctors : Doctor[] = [];
const appointments : Appointment[] = [];
const hospitalName = "Zivft";
const ZivftHospital = new Hospital (patients, doctors, appointments, hospitalName);

// add Patient
ZivftHospital.addPatient(moshe);
ZivftHospital.addPatient(chaim);
ZivftHospital.addPatient(israel);
ZivftHospital.addPatient(amitHaGever);
ZivftHospital.addPatient(natan);
ZivftHospital.addPatient(miryam);

// add doctors
ZivftHospital.addDoctor(drGay);
ZivftHospital.addDoctor(drSharon);
ZivftHospital.addDoctor(drLas);

// Add Appointments
ZivftHospital.addAppointment(appointment1);
ZivftHospital.addAppointment(appointment2);
ZivftHospital.addAppointment(appointment3);
ZivftHospital.addAppointment(appointment4);
ZivftHospital.addAppointment(appointment5);
ZivftHospital.addAppointment(appointment6);

// Get all appointments
ZivftHospital.getAppointment();

// Get appointments filters by doctor id
ZivftHospital.getAppointmentByDoctorId(800);

// Get appointments filters by data id
ZivftHospital.getAppointmentByDate(new Date ("2023-08-27"));

// Get appointments filters by patien id
ZivftHospital.getAppointmentByPatientId(101);



