//Paye deduction
const payeRates = [
    {minSalary: 0, maxSalary: 24000, rate: 0.1},
    {minSalary: 24001, maxSalary: 32333, rate: 0.25},
    {minSalary: 32334, maxSalary: 500000, rate: 0.3},
    {minSalary: 500001, maxSalary: 800000, rate: 0.33},
    {minSalary: 800001, max: infinity, rate: 0.35}
];

function calculatePaye(data) {
    for (let i =0; i < payeRates.length; i++) {
        if (data >= payeRates[i].min && data <= payeRates[i].max) {

        }
    }
    return data;
    }

    //NHIF deductions
    const nhifRates = [
        {minSalary: 0, maxSalary: 5999, rate: 150},
        {minSalary: 6000, maxSalary: 7999, rate: 300},
        {minSalary: 8000, maxSalary: 11999, rate: 400},
        {minSalary: 12000, maxSalary: 14999, rate: 500},
        {minSalary: 15000, maxSalary: 19999, rate: 600},
        {minSalary: 20000, maxSalary: 24999, rate: 750},
        {minSalary: 25000, maxSalary: 29999, rate: 850},
        {minSalary: 30000, maxSalary: 34999, rate: 900},
        {minSalary: 35000, maxSalary: 39999, rate: 950},
    ];

    function calculateNhif(data) {
        for (let i = 0; i < nhifRates.length; i++) {
            if (data >= nhifRates[i].min && data <= nhifRates[i].max) {
                return nhifRates[i].rate;
            }
        }
        return data;
    }
    //NSSF deductions
    function calculateNSSF(data) {
        if (data >= 0 && data <= 7000) {
            return (data);
            } else (data >= 7001 && data <= 36000);{
                return date ;


            }
            }

            let PAYE = calculatePaye(10000);
            let NHIF = calculateNhif(10000);
            let NSSF = calculateNSSF(10000);

            //Net salary
            function calculateNetSalary(grossSalary) {
                return grossSalary - (PAYE + NHIF + NSSF);
            }

            console.log(calculateNetSalary(80000));