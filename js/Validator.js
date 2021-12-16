class Validator {

    static isPositiveInteger(v) {
	return Validator.isPositiveDouble(v) && Math.floor(v) === v;
    }

    static isPositiveDouble(value) {
	const v = Number(value);
	return value.length != 0 && !isNaN(v) && isFinite(v) && v > 0;
    }

    static isNotEmpty(value) {
	return !(value.length === 0);
    }
}
