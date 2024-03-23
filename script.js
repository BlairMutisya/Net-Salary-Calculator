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

    let employeeContribution = salary * 0.05;
    let employerContribution = salary * 0.07; 
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
  }
  
  function calculateNSSF(salary) {

    let employeeContribution = salary * 0.06; 
    let employerContribution = salary * 0.06; 
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
  }
  