arr1=[[1,2,3],[4,5,6],[7,8,9]]
rows=arr1.length;
console.log(rows);
cols=arr1[0].length;
console.log(cols);
arr2=arr1.map(row=>row.map(x=>x*x));
console.log(arr2);