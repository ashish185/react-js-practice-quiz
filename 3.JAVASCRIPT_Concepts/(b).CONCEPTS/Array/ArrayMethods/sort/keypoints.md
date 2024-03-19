<!-- Sort function key points -->
1.  Work In place: It changes the existing array.
2.  Comparator function is useful.
3.  sort((a, b) => a - b); 
If comparator function returns a-b <0 means
agar right wala bda h left wale se tab swipe kar do
4. Just Remember return b-a for Decreasing and a-b for Increasing order.
5. The compare() function accepts two arguments a and b. The sort() method will sort elements based on the return value of the compare() function with the following rules:

If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

[20,1]
<!-- Inc order -->
return (a-b) then b>a: it will swap [1,20]
<!-- Dec order -->
[1,20]
return (b-a) then b>a: it will swap [20,1]

Ref: https://www.javascripttutorial.net/javascript-array-sort/