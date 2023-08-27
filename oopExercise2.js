"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// class Person
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    ;
    Person.prototype.setInfo = function () {
        return this;
    };
    return Person;
}());
;
// class Patient extends Person
var Patient = /** @class */ (function () {
    function Patient(person, patientID, phoneNumber, emergencyContact, medicalHistory) {
        this.person = person;
        this.patientID = patientID;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    ;
    Patient.prototype.addMedicalHistory = function (appointment) {
        this.medicalHistory.push(appointment);
    };
    ;
    return Patient;
}());
;
// MedicalStaff 
var MedicalStaff = /** @class */ (function (_super) {
    __extends(MedicalStaff, _super);
    function MedicalStaff(person, staffID, position, department) {
        var _this = _super.call(this, person.firstName, person.lastName, person.age, person.address) || this;
        _this.person = person;
        _this.staffID = staffID;
        _this.position = position;
        _this.department = department;
        return _this;
    }
    ;
    return MedicalStaff;
}(Person));
;
// class Doctor extends Person
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(medicalStaff, doctorID, specialization, availability) {
        var _this = _super.call(this, medicalStaff.person, medicalStaff.staffID, medicalStaff.position, medicalStaff.department) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        _this.availability = availability;
        return _this;
    }
    ;
    return Doctor;
}(MedicalStaff));
;
// class Appointment
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time, status) {
        if (date === void 0) { date = new Date(); }
        this.date = new Date();
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = status;
    }
    Appointment.prototype.setInfo = function () {
        return this;
    };
    ;
    return Appointment;
}());
;
// class Hospital
var Hospital = /** @class */ (function () {
    function Hospital(patients, doctors, appointments, hospitalName) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.hospitalName = hospitalName;
    }
    ;
    // Add patient
    Hospital.prototype.addPatient = function (patient) {
        this.patients.push(patient);
        console.log("The patient was successfully added");
    };
    ;
    // Add doctor
    Hospital.prototype.addDoctor = function (doctor) {
        this.doctors.push(doctor);
        console.log("The doctor was successfully added");
    };
    ;
    // Add appointment 
    Hospital.prototype.addAppointment = function (appointment) {
        this.appointments.push(appointment);
        console.log("The appointment  was successfully added");
    };
    ;
    // console.log appointments func
    Hospital.prototype.getAppointment = function (arrAppointments) {
        if (arrAppointments === void 0) { arrAppointments = this.appointments; }
        arrAppointments.forEach(function (appointment) {
            return console.log(appointment.setInfo());
        });
    };
    ;
    // Filter array appointments by doctor id
    Hospital.prototype.getAppointmentByDoctorId = function (id) {
        var appointmentByDoctorId = this.appointments.filter(function (appointment) { return appointment.doctor.doctorID === id; });
        this.getAppointment(appointmentByDoctorId);
    };
    ;
    // Filter array appointments by patien id
    Hospital.prototype.getAppointmentByPatientId = function (id) {
        var appointmentByPatienId = this.appointments.filter(function (appointment) { return appointment.patient.patientID === id; });
        this.getAppointment(appointmentByPatienId);
    };
    ;
    // Filter array appointments by date
    Hospital.prototype.getAppointmentByDate = function (date) {
        var appointmentByDate = this.appointments.filter(function (appointment) { return appointment.date.getDate() === date.getDate(); });
        this.getAppointment(appointmentByDate);
    };
    ;
    return Hospital;
}());
;
// Persons
var moshe = new Person("moshe", "moshe", 25, "Jerusalem");
var chaim = new Person("chaim", "chaim", 23, "Sefat");
var israel = new Person("israel", "israel", 102, "Afula");
var amitHaGever = new Person("amitHaGever", "amitHaGever", 10, "BB");
var natan = new Person("natan", "natan", 55, "Tel-aviv");
var miryam = new Person("miryam", "miryam", 47, "Bat-yam");
// Doctors
var Gay = new Person("gay", "israel", 800, "Tel-aviv");
var Sharon = new Person("sharon", "hadar", 801, "Afula");
var Las = new Person("Yoram", "las", 802, "Petach-Tikwa");
// medicalHistoryS
var mosheMedicalHistory = [];
var chaimMedicalHistory = [];
var israelMedicalHistory = [];
var amitHaGeverMedicalHistory = [];
var natanMedicalHistory = [];
var miryamMedicalHistory = [];
// Patients
var moshePat = new Patient(moshe, 101, 512345678, 5212422556, mosheMedicalHistory);
var chaimPat = new Patient(chaim, 102, 5112345678, 521245456, chaimMedicalHistory);
var israelPat = new Patient(israel, 103, 51234265678, 521424556, israelMedicalHistory);
var amitHaGeverPat = new Patient(amitHaGever, 104, 5124345678, 52124556, amitHaGeverMedicalHistory);
var natanPat = new Patient(natan, 105, 51234566678, 521244556, natanMedicalHistory);
var miryamPat = new Patient(miryam, 106, 51234995678, 5212224556, miryamMedicalHistory);
;
// MedicalStaff
var medicalStaff1 = new MedicalStaff(Gay, 120, "abc", "Otolaryngology");
var medicalStaff2 = new MedicalStaff(Sharon, 121, "abvb", "Family");
var medicalStaff3 = new MedicalStaff(Las, 122, "abcdff", "Corona");
// Doctors
var drGay = new Doctor(medicalStaff1, 800, "Otolaryngology", 1000);
var drSharon = new Doctor(medicalStaff2, 801, "Family", 2000);
var drLas = new Doctor(medicalStaff3, 802, "Corona", 3000);
// Appointments
var appointment1 = new Appointment(moshePat, drGay, new Date("2023-08-27"), 25, "Completed");
var appointment2 = new Appointment(chaimPat, drGay, new Date("2023-08-29"), 25, "Completed");
var appointment3 = new Appointment(israelPat, drSharon, new Date("2023-07-27"), 25, "Planned");
var appointment4 = new Appointment(amitHaGeverPat, drLas, new Date("2023-08-25"), 25, "Completed");
var appointment5 = new Appointment(natanPat, drSharon, new Date("2023-08-27"), 25, "Planned");
var appointment6 = new Appointment(miryamPat, drLas, new Date("2023-08-29"), 25, "Cancelled");
// Hospital === 
var patients = [];
var doctors = [];
var appointments = [];
var hospitalName = "Zivft";
var ZivftHospital = new Hospital(patients, doctors, appointments, hospitalName);
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
ZivftHospital.getAppointmentByDate(new Date("2023-08-27"));
// Get appointments filters by patien id
ZivftHospital.getAppointmentByPatientId(101);
