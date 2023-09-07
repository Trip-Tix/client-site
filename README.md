Ignore Warning and Reasons

Warning: 

```
./src/components/list-transport/filter.tsx
115:8  Warning: React Hook useEffect has missing dependencies: 'filteringData' and 'setFilteringData'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps
```

Reasons: 

`filteringData` dependency will create infinite loop
