# Aggregation Exercises

Import the zips.json file into your MongoDB. Database name is "population" and collection name is "zipcodes".

mongoimport --db population --collection zipcodes --file zips.json

## Atlanta Population

1. use db.zipcodes.find() to filter results to only the results where city is ATLANTA and state is GA.
2. use db.zipcodes.aggregate with $match to do the same as above.
3. use $group to count the number of zip codes in Atlanta.
4. use $group to find the total population in Atlanta.

## Populations By State

1. use aggregate to calculate the total population for each state
2. sort the results by population, highest first
3. limit the results to just the first 3 results. What are the top 3 states in population?

## Populations by City

1. use aggregate to calculate the total population for each city (you have to use city/state combination). You can use a combination for the _id of the $group: { city: '$city', state: '$state' }
2. sort the results by population, higest first
3. limit the results to just the first 3 results. What are the top 3 cities in population?
4. What are the top 3 cities in population in Texas?

## Bonus

1. Write a query to get the average city population for each state.
2. What are the top 3 states in terms of average city population?
