var wintick = [];
var totaltick = [];
var curround = document.getElementById("RoundNumber1");

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
	roundnum[roundnum.length] = curround.innerHTML.split('#')[1];
	console.log("Logged Ticket || " + val + " / " + totalTickets());
}