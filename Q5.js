// 4-5 Program done

Myname = " \tJames Bond\n "

String.prototype.trim = String.prototype.trim || function () {
    return this.replace(/^\s+|\s+$/g, "");
};

String.prototype.lTrim = String.prototype.lTrim || function () {
    return this.replace(/^\s+/, "");
};

String.prototype.rTrim = String.prototype.rTrim || function () {
    return this.replace(/\s+$/, "");
};


console.log(Myname)
//Ltrim Funcation is remove Left Side Spaces
console.log(Myname.lTrim())
//rtrim Funcation is remove Right Side Spaces
console.log(Myname.rTrim())
//Trim funcation remove all spaces
console.log(Myname.trim())