var wintick = [];
var totaltick = [];

function totalTickets()
{
	var totix = []
	for(var p in playerData)
	{
		totix[totix.length] = playerData[p].bets[0][1];
	}
	var largest = Math.max.apply(Math, totix);
	return largest;
}

function addWintick(val)
{
	wintick[wintick.length] = val;
	totaltick[totaltick.length] = totalTickets();
	console.log("Logged Ticket || " + val + " / " + totalTickets());
}