## API Caching
- There are some ways by which we can cache the API at UI and there are some strategies too for handling the caching.
  
## Caching Strategies
- Cache-first: API call will search from Cache first then network.
- network-only: API call will network ************ but cache will be maintained.
- cache-and-network
- cache-last: API call then network not found then search in cache.
- no-cache: Do not look in cache and do not maintain any cache on UI.
- 
## Some npm libraries for this
1. React Query
2. SWR
3. Axios: Implement yourself caching
4. Apollo Client
   R