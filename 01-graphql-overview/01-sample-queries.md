Sample Queries for Snowtooth API
===========

__Snowtooth Playground: [http://snowtooth.herokuapp.com](http://snowtooth.herokuapp.com)__

Queries
-----
```graphql
query {
  allLifts {
    name
    status
    capacity
  }
}
```

Operation Names
------

* Add the operation name

```graphql
query lifts {
  allLifts {
    name
    status
    capacity
  }
}
```


```graphql
query {
  allTrails {
    name
    difficulty
  }
}
```

```graphql
query liftsAndTrails {
  allLifts {
    name
    status
    capacity
    night
    elevationGain
  }
  allTrails {
    name
    difficulty
  }
}
```

Connections
-----

* Lift connections
```graphql
query lifts {
  lifts: allLifts {
    name
    status    
    capacity
    trailAccess {
      name
      status
    }
  }
  allTrails {
    name
    difficulty
    accessedByLifts {
      name
    }
}
```
