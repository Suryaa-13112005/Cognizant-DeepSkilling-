public class Loan {

    private int loanId;
    private String customerName;
    private double amount;

    public Loan(int loanId, String customerName, double amount) {
        this.loanId = loanId;
        this.customerName = customerName;
        this.amount = amount;
    }

    public int getLoanId() {
        return loanId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double getAmount() {
        return amount;
    }
}
