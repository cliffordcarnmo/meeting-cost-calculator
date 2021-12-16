class Validator{
	static validateNumeric(value){
		if(isNaN(value)){
			return false;
		}else{
			return true;
		}
	}

	static validateDouble(value){
		var re = /(^-?\d\d*\.\d\d*$)|(^-?\.\d\d*$)/;  

		if(re.test(value)){
			return true;
		}
		else{
			return false;
		}
	}

	static validateNotEmpty(value){
		if(value.length === 0){
			return false;
		}else{
			return true;
		}
	}
}