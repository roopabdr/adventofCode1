Solving Question 1 of https://adventofcode.com/2015/day/1
There are only 2 directions Up and Down

Mathemtics is if go a number of times Up the stairs and then the same number of times down stairs you'll end up being where you started out initially.

And so, if you go Up 3 times and come Down 3 times you're at level 0, while if you go Up 3 times but you come down only 2 times then you're at level 1 which is nothing but 3-2 =1.

{your current floor level} = {number of floors you go Up} - {number of floors you go Down}

And so, the algorithm for this whole problem is counting number of times the opening parenthesis '(' is repeated to count number of floor Santa goes Up and then the same thing with closing parenthesis ')' to count the number of floors Santa goen down.

And their subtraction provides the floor at which Santa would finally reach.

Count of '(' : 3537

Count of ')' : 3463

Subtraction : 3537 - 3463 = 74th floor!