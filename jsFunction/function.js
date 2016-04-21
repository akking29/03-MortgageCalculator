var monthlyPayment = function(){

	var loanBalance = $('#loanBalance').val();
	//get value of Loan Balance from input 1
	console.log(loanBalance);
	//test
	var interestRate = $('#interestRate').val();
	//get value of Interest Rate
	console.log(interestRate);

	var loanTerm = $('#loanTerm').val();
	//get value of Loan Term
	console.log(loanTerm);

	var amountOfPayment = $('#period').val();
	//get values from selections
	console.log(amountOfPayment);
	
	//perform calculation
	
	var numberOfPayments = loanTerm * amountOfPayment;
	var monthlyInterestRate = (interestRate/100) / amountOfPayment;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate -1); 
	var monthlyPayment = loanBalance * interestQuotient;

	$('#answer').html('Your monthly payment is: $' + Math.round(monthlyPayment));
	//print message to "answer" box
	
}

