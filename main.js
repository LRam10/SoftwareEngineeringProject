
function CalcPriceToyota()
	{
		var a = parseFloat(document.getElementById("day").value);
		var price = 16.05 * a;
		document.getElementById("totalprice").value = parseFloat(price).toFixed(2) + "$";
	}

	
function CalcPriceHonda()
	{
		var a = parseFloat(document.getElementById("day").value);
		var price = 15.05 * a;
		document.getElementById("totalprice").value = parseFloat(price).toFixed(2) + "$";
	}


function CalcPriceMercedes()
	{
		var a = parseFloat(document.getElementById("day").value);
		var price = 42.05 * a;
		document.getElementById("totalprice").value = parseFloat(price).toFixed(2) + "$";
	}

	


