const Employee = require('./Employee');

class Intern extends Employee {
    constructor(answers) {
        super(answers)
this.schoolName = answers.school;
    };
    getOptional(){
        return 'School: ' + this.schoolName;
    }
    getRole(){
        return "Intern";
    };
};

module.exports = Intern;

