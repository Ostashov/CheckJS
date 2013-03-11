"use strict;"
var problems = [];
problems[1] = {
	"fname": "sum",
	"tests": [{"data":"12345", "answer":15, "sample":true}, {"data":"990", "answer":18, "sample":true}, {"data":"1", "answer":1, "sample":false}, {"data":"1010101", "answer":4, "sample":false}, {"data":"0", "answer":0, "sample":false}],
	"statement": "Calculate the sum of digits of number.",
	"code": ""
}

problems[2] = {
	"fname": "sum",
	"tests": [{"data":"100", "answer":5050, "sample":true}, {"data":"999999", "answer":499999500000, "sample":false}, {"data":"111111111", "answer":6172839549382716, "sample":false}],
	"statement": "Calculate the sum from 1 to N.",
	"code": "function sum(number) {\n\
				var result = 0;\n\
				for (var i=0; i<= +number; i++) {\n\
					result = result + i;\n\
				}\n\
				return	result;\n\
			}"
}