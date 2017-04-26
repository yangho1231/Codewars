function trouble(x, t) {
	for(var i = x.length-1; i >0; i--){
		if(x[i] + x[i-1] === t) {
			x.splice(i,1);
		}
	}
	return x;
}