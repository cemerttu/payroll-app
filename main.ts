class CommissionCalculator {
  constructor(private salesAmount: number, private commissionRate: number) {}

  public calculateCommission(): number {
    return this.salesAmount * (this.commissionRate / 100);
  }
}

class PayrollApplication {
  constructor(
    private employeeName: string,
    private baseSalary: number,
    private commissionRate: number
  ) {}

  public calculateTotalPay(salesAmount: number): string {
    const commissionCalculator = new CommissionCalculator(salesAmount, this.commissionRate);
    const commission = commissionCalculator.calculateCommission();
    const totalPay = this.baseSalary + commission;

    return `Employee: ${this.employeeName}
Base Salary: $${this.baseSalary.toFixed(2)}
Commission: $${commission.toFixed(2)}
Total Pay: $${totalPay.toFixed(2)}`;
  }
}

// Example
const payroll = new PayrollApplication("Alice", 3000, 15);
console.log(payroll.calculateTotalPay(10000));





