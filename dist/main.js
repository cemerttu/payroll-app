var CommissionCalculator = /** @class */ (function () {
    function CommissionCalculator(salesAmount, commissionRate) {
        this.salesAmount = salesAmount;
        this.commissionRate = commissionRate;
    }
    CommissionCalculator.prototype.calculateCommission = function () {
        return this.salesAmount * (this.commissionRate / 100);
    };
    return CommissionCalculator;
}());
var PayrollApplication = /** @class */ (function () {
    function PayrollApplication(employeeName, baseSalary, commissionRate) {
        this.employeeName = employeeName;
        this.baseSalary = baseSalary;
        this.commissionRate = commissionRate;
    }
    PayrollApplication.prototype.calculateTotalPay = function (salesAmount) {
        var commissionCalculator = new CommissionCalculator(salesAmount, this.commissionRate);
        var commission = commissionCalculator.calculateCommission();
        var totalPay = this.baseSalary + commission;
        return "Employee: ".concat(this.employeeName, "\nBase Salary: $").concat(this.baseSalary.toFixed(2), "\nCommission: $").concat(commission.toFixed(2), "\nTotal Pay: $").concat(totalPay.toFixed(2));
    };
    return PayrollApplication;
}());
// Example
var payroll = new PayrollApplication("Alice", 3000, 15);
console.log(payroll.calculateTotalPay(10000));
