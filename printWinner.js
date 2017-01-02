function printWinner()
{
	for(var p in playerData)
	{
		var name = playerData[p].name;
		var tickets = playerData[p].bets[0];
		//console.log(name + " -- " + tickets);
	
		if(winningTicket > tickets[0] && winningTicket < tickets[1])
	    {
			console.log(name + " WON");
	    }
	}
}