function calculateNetSalary() {
  let basicSalary = parseFloat(document.getElementById('basic-salary').value);
  let benefits = parseFloat(document.getElementById('benefits').value);
  
  let payee = calculatePayee(basicSalary);
  let nhifDeductions = calculateNHIF(basicSalary);
  let nssfDeductions = calculateNSSF(basicSalary);
  
  let grossSalary = basicSalary + benefits;
  let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
  document.getElementById('net-salary-output').innerHTML = `
    <p>Gross Salary: ${grossSalary}</p>
    <p>Payee (Tax): ${payee}</p>
    <p>NHIF Deductions: ${nhifDeductions}</p>
    <p>NSSF Deductions: ${nssfDeductions}</p>
    <p>Net Salary: ${netSalary}</p>
  `;
}

function calculatePayee(salary) {
  let employeeContribution = salary * 0.02;
  let employerContribution = salary * 0.04; 
  let totalContribution = employeeContribution + employerContribution;
  return totalContribution;
}

function calculateNHIF(salary) {
  let nhifRates = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },
      { min: 50000, max: 59999, deduction: 1200 },
      { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 100000, max: Infinity, deduction: 1700 }
  ];

  let nhifDeduction = 0;

  // Find the appropriate range and deduct NHIF accordingly
  for (let i = 0; i < nhifRates.length; i++) {
      if (salary >= nhifRates[i].min && salary <= nhifRates[i].max) {
          nhifDeduction = nhifRates[i].deduction;
          break;
      }
  }

  return nhifDeduction;
}

function calculateNSSF(salary) {
  let employeeContribution = salary * 0.06; 
  let employerContribution = salary * 0.06; 
  let totalContribution = employeeContribution + employerContribution;
  return totalContribution;
}
