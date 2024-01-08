# sports-reference-solution

1. First, I put the keys into a const variable to iterate through later.
2. Next, I created a table and the table header.
3. For the table header I created n + 1 cells, where n is the number of teams.
4. I iterated through the teams list to put the team name in each header.
5. The first cell.innerHTML was set to "Tm".
6. Then, I created the table body.
7. I used nested for loops to iterate through each team and their oppenents.
8. When a team and their oppenent were equal the cell.innerHTML was set to "--".
9. Every other instance the cell.innerHTML was set to the corresponding wins record in the JSON object.
10. The format for this retrieval was object[team][teamVersus].W.
11. For cells that were in the first column, last column, first row, or last row corresponding classes were added to make styling the table easier.
12. This is my sample solution:

![alt text](https://github.com/zachderish/sports-reference-solution/blob/main/Solution.png?raw=true)
