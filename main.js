const TOYOTA = 16.05
function CalcPriceToyota()
	{
		var a = parseFloat(document.getElementById("day").value);
		var price = 16.05 * a;
		document.getElementById("totalprice").value = parseFloat(price).toFixed(2) + "$";
	}