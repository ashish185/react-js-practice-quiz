TOPICS

1. What is GraphQL?
2. Benefits?
3. Rest vs GraphQL
4. Building Block
5. Building GraphQL APP
6. Calling GraphQL
7. Tool
8. Advance

**Appolo Graph QL Simulator**
https://studio.apollographql.com/public/countries/variant/current/explorer

**Tools and Libraries**
https://graphql.org/community/tools-and-libraries/

1. **GraphQL**
Below is the tree structure is like a graph
- Continents
    - Countries
        - Languages
 
 Above if we do in Rest
 /api/continents, /api/countries, /api/languages

`But in case if we data for three together we need do to call 3 times api call, but in Graph QL it can be one`

**History**
2012 by Facebook, then 2015 become Open Source

2. **Benefits**
- Avoid Overfetching
- Avoid Under-fetching
- Better Mobile Performance: In case of desktop you want all informaiton and in mobile you required less information.
- Declarative data fetching: We give the structure
- Structured/Hierarachal
```js
// I can query it like this or 
query ExampleQuery {
  continents {
    name
  }
  countries {
    name
  }
  languages {
    name
  }
}

// To get the result in heirarichal form we can.
query ExampleQuery {
  continents {
    name
      countries {
         name
         languages {
          name
         }
      }
    }  
  }
```
- Introspection: Jo bhi field resoinse m chiye vo humay fields m hi dikh jayegi, kind of documentation.

**Q:Does it use POST, PUT method?**
By default everything is POST method.

| Aspect            | Rest                                      | GraphQL                                   | Comments |
|----------         |----------|--------------------------------|-------------------------------------------|
| Data Fetching     | Multiple Endpoints                        | Single Endpoint                           | Data 4   |
| Request Structure | Fixed structure                                    | Data 7   | Data 8              |
| Over-fetcing      | Issues  | Data 11  | Data 12  |
| Response size     | Fixed issues  | Data 11  | Data 12  |
| Versioning        | Data 10  | Data 11  | Data 12  |
| Schema Defination | Data 10  | Data 11  | Data 12  |
| Real time Capablities    | Data 10  | Data 11  | Data 12  |
