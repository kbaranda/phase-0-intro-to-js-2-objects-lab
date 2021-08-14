const employee = {
    name : "Kat",
    streetAddress : "1703 Paseo Encinal Dr",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeInfo = {...employee};
    newEmployeeInfo[key] = value;
    return newEmployeeInfo;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newDeleted = {...employee};
    delete newDeleted[key];
    return newDeleted;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}