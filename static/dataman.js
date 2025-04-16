//Auxiliary functions for the NumberGuesser and Wipe Out games
function NumGen(Limit)
	{
	// Random number is generated between 0 and Limit value
	var myNumber = Math.round(Math.random() * Limit);
	return myNumber;
	}

//Auxiliary functions for the MissingNumber game
function OperationSelector()
	{
	
		var myNumber = Math.round(Math.random() * 10);
		if (myNumber > 5)
			{
				return "+";
			} 
		else
			{
				return "-";
			}
	
	}

function GenOp (OpSign)
	{

		var op1 = Math.round(Math.random() * 100);
		var op2 = Math.round(Math.random() * 100);
		var op3 = 0;
		if (op2 > op1) //If op2 > op1 the values are exchanged to avoid negative results
			{
			 op3 = op1;
			 op1= op2;
			 op2 = op3;
			}
		
		if (OpSign == "+")
			{
				return op1 +";+;" + op2 + "; = [ ] ";
			} 
		else 
			{
				return op1 + ";-;" + op2 + "; = [ ] ";
			} 	
	}
//Auxiliary functions for the Missing brackets game  [ ? ]
function GenNumbers (OpSign)
{
	var op1 = Math.round(Math.random() * 100);
	var op2 = Math.round(Math.random() * 100);
	var op3 = 0;
	if (OpSign == "-" && op2 > op1) //If op2 > op1 the values are exchanged to avoid negative results
		{
		 var temp = op1;
		 op1 = op2;
		 op2 = temp;
		}	
	if (OpSign == "+")
		{
			var op3 = Number (op1) + Number(op2);
		} else
		{
			var op3 = Number (op1) - Number(op2);
		}
	return op1 + ";" + op2 + ";" + op3;	
}

