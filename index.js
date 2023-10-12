const createBox = (x, y) => {
    return x * y;
};

const canDrive = () => {
    const age = 18;

    if (age >= 18) {
        return 'Full Driving Licence';
    } else {
        return 'Provisional License';
    }
};

const powerLevel = () => {
    const power = 9001;

    if (power > 9000) {
        return true;
    } else {
        return false;
    }
};

const workSchedule = (employeeOne, employeeTwo) => {
    return employeeOne + employeeTwo;
};

module.exports = {
    createBox,

    canDrive,

    powerLevel,

    workSchedule,
};