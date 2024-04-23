function carDetails (manufacturer: string, modelName: string, ...additionalInfo){

    const car = { manufacturer, modelName, ...Object.fromEntries(additionalInfo)};

    return car; 
};

const myCarDetails = carDetails("toyota","corolla", ["color", "blue"],['year', 2019]);


console.log(myCarDetails);