function calculateNetSalary(basicSalary, benefits) {
    // Define tax rates and deduction limits
    const taxRates = [
      { min: 0, max: 24000, rate: 10 },
      { min: 24001, max: 32333, rate: 25 },
      { min: 32334, max: 500000, rate: 30 },
      { min: 500001, max: 800000, rate: 32.5 },
      { min: 800001, max: Infinity, rate: 35 },
    ];
  
    const nhifDeductions = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 24999, deduction: 300 },
      { min: 25000, max: 99999, deduction: 400 },
      { min: 100000, max: Infinity, deduction: 500 },
    ];
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE (tax)
    let paye = 0;
    for (const rate of taxRates) {
      if (grossSalary >= rate.min) {
        const taxableAmount = Math.min(grossSalary - rate.min, rate.max - rate.min + 1);
        paye += (taxableAmount * rate.rate) / 100;
      }
    }
  
    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const deduction of nhifDeductions) {
      if (grossSalary >= deduction.min && grossSalary <= deduction.max) {
        nhifDeduction = deduction.deduction;
        break;
      }
    }
  
    // Calculate NSSF deduction (assuming Tier I)
    const nssfEmployeeContribution = Math.min(0.06 * basicSalary, 6000);
    const nssfEmployerContribution = Math.min(0.06 * basicSalary, 6000);
    const nssfTotalDeduction = nssfEmployeeContribution + nssfEmployerContribution;
  
    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfTotalDeduction;
  
    return {
      grossSalary,
      paye,
      nhifDeduction,
      nssfTotalDeduction,
      netSalary,
    };
  }
  
  // the calculation:
  const basicSalary = 70000;
  const benefits = 2000;
  const result = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", result.grossSalary);
  console.log("PAYE (Tax):", result.paye);
  console.log("NHIF Deduction:", result.nhifDeduction);
  console.log("NSSF Deduction:", result.nssfTotalDeduction);
  console.log("Net Salary:", result.netSalary);
  