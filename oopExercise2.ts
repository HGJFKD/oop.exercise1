import { log } from "console";

// class Person
class Person {
    firstName : String;
    lastName :String;
    age : number;
    address: string

    constructor (firstName: String, lastName:String,
        age : number, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;

    };

    setInfo(){
        return this
    }
};

// class Patient extends Person
class Patient {
    person : Person
    patientID :number;
    phoneNumber : number;
    emergencyContact : number;
    medicalHistory: Appointment[]

    constructor(person : Person, patientID : number,
        phoneNumber : number, emergencyContact : number,
        medicalHistory: Appointment[]){
        this.person = person
        this.patientID = patientID;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    };

    addMedicalHistory(appointment : Appointment) : void {
        this.medicalHistory.push(appointment);
    };

};

// MedicalStaff 
class MedicalStaff extends Person {
    person :Person;
    staffID : number;
    position : string;
    department : string;

    constructor (person: Person, staffID : number, position : string, department : string){
        super(person.firstName, person.lastName ,person.age, person.address);
        this.person = person
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    };

};

// class Doctor extends Person
class Doctor extends MedicalStaff {
    medicalStaff: MedicalStaff;
    doctorID : number;
    specialization : string;
    availability : number;

    constructor (medicalStaff: MedicalStaff, doctorID : number,
        specialization : string, availability : number){
        super(medicalStaff.person, medicalStaff.staffID ,medicalStaff.position,
            medicalStaff.department);
        this.doctorID = doctorID;
        this.specialization = specialization;
        this.availability = availability;
    };
};

// class Appointment
class Appointment {
    patient : Patient ;
    doctor : Doctor;
    date: Date = new Date();  
    time: number;
    status : ("Planned" | "Completed" | "Cancelled");

    constructor (patient : Patient, doctor : Doctor, date: Date = new Date(),
        time: number, status: ("Planned" | "Completed" | "Cancelled")){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date
        this.time = time;
        this.status = status;
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

// Persons
const moshe = new Person("moshe","moshe", 25, "Jerusalem");
const chaim = new Person ("chaim","chaim",23, "Sefat");
const israel = new Person ("israel","israel",102, "Afula");
const amitHaGever = new Person ("amitHaGever","amitHaGever",10, "BB");
const natan = new Person ("natan","natan",55, "Tel-aviv");
const miryam = new Person ("miryam","miryam",47, "Bat-yam");
// Doctors
const Gay = new Person ("gay","israel",800, "Tel-aviv");
const Sharon = new Person ("sharon","hadar",801, "Afula");
const Las = new Person ("Yoram","las",802, "Petach-Tikwa");

// medicalHistoryS
const mosheMedicalHistory : Appointment[] = []
const chaimMedicalHistory : Appointment[] = []
const israelMedicalHistory : Appointment[] = []
const amitHaGeverMedicalHistory : Appointment[] = []
const natanMedicalHistory : Appointment[] = []
const miryamMedicalHistory : Appointment[] = []

// Patients
const moshePat = new Patient (moshe, 101, 512345678, 5212422556,mosheMedicalHistory);
const chaimPat = new Patient (chaim, 102, 5112345678, 521245456,chaimMedicalHistory);
const israelPat = new Patient (israel, 103, 51234265678, 521424556,israelMedicalHistory);
const amitHaGeverPat = new Patient (amitHaGever, 104, 5124345678, 52124556,amitHaGeverMedicalHistory);
const natanPat = new Patient (natan, 105, 51234566678, 521244556,natanMedicalHistory);
const miryamPat = new Patient (miryam, 106, 51234995678, 5212224556,miryamMedicalHistory);;

// MedicalStaff
const medicalStaff1 = new MedicalStaff (Gay, 120, "abc", "Otolaryngology");
const medicalStaff2 = new MedicalStaff (Sharon, 121, "abvb", "Family");
const medicalStaff3 = new MedicalStaff (Las, 122, "abcdff", "Corona");

// Doctors
const drGay = new Doctor (medicalStaff1 ,800, "Otolaryngology", 1000);
const drSharon = new Doctor (medicalStaff2 ,801, "Family", 2000);
const drLas = new Doctor (medicalStaff3 ,802, "Corona", 3000);

// Appointments
const appointment1 = new Appointment(moshePat, drGay, new Date ("2023-08-27"), 25, "Completed");
const appointment2 = new Appointment(chaimPat, drGay, new Date ("2023-08-29"), 25, "Completed");
const appointment3 = new Appointment(israelPat, drSharon, new Date ("2023-07-27"), 25, "Planned");
const appointment4 = new Appointment(amitHaGeverPat, drLas, new Date ("2023-08-25"), 25, "Completed");
const appointment5 = new Appointment(natanPat, drSharon, new Date ("2023-08-27"), 25, "Planned");
const appointment6 = new Appointment(miryamPat, drLas, new Date ("2023-08-29"), 25, "Cancelled");

// Hospital === 
const patients : Patient[] = [];
const doctors : Doctor[] = [];
const appointments : Appointment[] = [];
const hospitalName = "Zivft";
const ZivftHospital = new Hospital (patients, doctors, appointments, hospitalName);

// add Patient
ZivftHospital.addPatient(moshePat);
ZivftHospital.addPatient(chaimPat);
ZivftHospital.addPatient(israelPat);
ZivftHospital.addPatient(amitHaGeverPat);
ZivftHospital.addPatient(natanPat);
ZivftHospital.addPatient(miryamPat);

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



