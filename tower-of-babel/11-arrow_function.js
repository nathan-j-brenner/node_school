var inputs = process.argv.slice(2);
var results = 
	inputs.map((input)=>{ 
				return input[0];
			})
			.reduce((prev, cur)=>{
				return prev+cur;
			});
console.log(results);