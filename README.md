# kbra

1. Use nodeJS.
2. Create an express server.
3. Create 3 end points
a. Get: person/:id
b. post: person/list
i. This should have the ability to filter the data by firstName or lastName.
Do not worry about pagination.
c. Post: insert a new person in the array.
4. Must include unit tests for each end point.

Dataset:
[
{ &quot;id&quot;: 1, &quot;firstName&quot;: &quot;Mickey&quot;, &quot;lastName&quot;: &quot;Mouse&quot; },
{ &quot;id&quot;: 2, &quot;firstName&quot;: &quot;Donald &quot;, &quot;lastName&quot;: &quot;Duck&quot; },
{ &quot;id&quot;: 3, &quot;firstName&quot;: &quot;Minnie&quot;, &quot;lastName&quot;: &quot;Mouse&quot; },
{ &quot;id&quot;: 4, &quot;firstName&quot;: &quot;Daisy&quot;, &quot;lastName&quot;: &quot;Duck&quot; },
{ &quot;id&quot;: 5, &quot;firstName&quot;: &quot;Pluto &quot;, &quot;lastName&quot;: &quot;Dog&quot; },
{ &quot;id&quot;: 6, &quot;firstName&quot;: &quot;Chip&quot;, &quot;lastName&quot;: &quot;Chipmuck&quot; },
{ &quot;id&quot;: 7, &quot;firstName&quot;: &quot;Dale &quot;, &quot;lastName&quot;: &quot;Chipmuck&quot; },
{ &quot;id&quot;: 8, &quot;firstName&quot;: &quot;Olive&quot;, &quot;lastName&quot;: &quot;Oil&quot; },
{ &quot;id&quot;: 9, &quot;firstName&quot;: &quot;Bruce&quot;, &quot;lastName&quot;: &quot;Wayne&quot; },
{ &quot;id&quot;: 10, &quot;firstName&quot;: &quot;Peter&quot;, &quot;lastName&quot;: &quot;Parker&quot; },
{ &quot;id&quot;: 11, &quot;firstName&quot;: &quot;Clark&quot;, &quot;lastName&quot;: &quot;Kent&quot; },
{ &quot;id&quot;: 12, &quot;firstName&quot;: &quot;Loise&quot;, &quot;lastName&quot;: &quot;Lane&quot; },
{ &quot;id&quot;: 13, &quot;firstName&quot;: &quot;Luke&quot;, &quot;lastName&quot;: &quot;Skywalker&quot; }
]
