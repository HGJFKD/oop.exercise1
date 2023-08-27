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
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Person.prototype.setInfo = function () {
        return this;
    };
    return Person;
}());
;
// class Patient extends Person
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(firstName, lastName, patientID) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.patientID = patientID;
        return _this;
    }
    ;
    return Patient;
}(Person));
;
// class Doctor extends Person
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(firstName, lastName, doctorID, specialization) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        return _this;
    }
    return Doctor;
}(Person));
// class Appointment
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time) {
        if (date === void 0) { date = new Date(); }
        this.date = new Date();
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
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
// Patients
var moshe = new Patient("moshe", "moshe", 100);
var chaim = new Patient("chaim", "chaim", 101);
var israel = new Patient("israel", "israel", 102);
var amitHaGever = new Patient("amitHaGever", "amitHaGever", 103);
var natan = new Patient("natan", "natan", 104);
var miryam = new Patient("miryam", "miryam", 105);
// Doctors
var drGay = new Doctor("gay", "israel", 800, "Otolaryngology");
var drSharon = new Doctor("sharon", "hadar", 801, "Family");
var drLas = new Doctor("Yoram", "las", 802, "Corona");
// Appointments
var appointment1 = new Appointment(moshe, drGay, new Date("2023-08-27"), 25);
var appointment2 = new Appointment(chaim, drGay, new Date("2023-08-29"), 25);
var appointment3 = new Appointment(israel, drSharon, new Date("2023-07-27"), 25);
var appointment4 = new Appointment(amitHaGever, drLas, new Date("2023-08-25"), 25);
var appointment5 = new Appointment(natan, drSharon, new Date("2023-08-27"), 25);
var appointment6 = new Appointment(miryam, drLas, new Date("2023-08-29"), 25);
// Hospital === 
var patients = [];
var doctors = [];
var appointments = [];
var hospitalName = "Zivft";
var ZivftHospital = new Hospital(patients, doctors, appointments, hospitalName);
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
ZivftHospital.getAppointmentByDate(new Date("2023-08-27"));
// Get appointments filters by patien id
ZivftHospital.getAppointmentByPatientId(101);
