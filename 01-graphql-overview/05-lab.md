Student Lab Challenge
==========

Using SWAPI: http://graphql.org/swapi-graphql/

* List all of the films with id, title, and director

```graphql
query {
  allFilms {
    films {
      id
      title
      director
    }
  }
}
```

* Extra Credit: Send a query to find a person with an personID of 5. Find their name, year they were born, and height.

```graphql
{
  person(personID:5) {
    name
    birthYear
    height
  }
}
```

* Extra, extra credit: Once you know which person has an ID of 5 from the query, name the query with the person's name:

```graphql
{
  princessLeia:person(personID:5) {
    name
    birthYear
    height
  }
}
```
