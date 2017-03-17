function findOdd(A) {
  var x = 0;
  for(var i = 0; i < A.length; i++){
			x= x^A[i];
		}
		return x;
}
findOdd([1,1,2,3,3]);