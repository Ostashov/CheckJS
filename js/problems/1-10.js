"use strict;"
var problems = [];
problems[1] = {
    "name": "A+B",
    "tests": [{"data":[101,20], "answer":121, "sample":true}, {"data":[0,9019], "answer":9019, "sample":true}, {"data":[1,1], "answer":2, "sample":false}, {"data":[1000, -900], "answer":100, "sample":false}, {"data":[1010101, 10], "answer":1010111, "sample":false}, {"data":[9, -9], "answer":0, "sample":false}, {"data":[99999, 1], "answer":100000, "sample":false}, {"data":[0, 0], "answer":0, "sample":false}, {"data":[-1, -1], "answer":-2, "sample":false}, {"data":[555, 445], "answer":1000, "sample":false}],
    "statement": "Написать безымянную функцию, результатом которой является сумма двух чисел А и В.<br>[А, В] - исходный массив;<br>Результат - число.",
    "code" : "function (mas) {\n\
                var result = mas[0] + mas[1];\n\
                return    result;\n\
            }"
}

problems[2] = {
    "name": "A-B",
    "tests": [{"data":[101,20], "answer":81, "sample":true}, {"data":[0,9019], "answer":9019, "sample":true}, {"data":[1,1], "answer":0, "sample":false}, {"data":[1000, -900], "answer":1900, "sample":false}],
    "statement": "Написать безымянную функцию, результатом которой является разность двух чисел А и В.<br>[А, В] - исходный массив;<br>Результат - число.<br><b>В решении ошибка!</b>",
    "code" : "function (mas) {\n\
                var result = mas[0] + mas[1];\n\
                return    result;\n\
            }"
}

problems[3] = {
    "name": "Посчитать сумму цифр числа",
    "tests": [{"data":"12345", "answer":15, "sample":true}, {"data":"990", "answer":18, "sample":true}, {"data":"1", "answer":1, "sample":false}, {"data":"1010101", "answer":4, "sample":false}, {"data":"0", "answer":0, "sample":false}],
    "statement": "Написать функцию, результат которой является сумма цифр исходного числа.<br>Исходное число - строка;<br>Результат - число.<b>Без кода</b>",
    "code": ""
}

problems[4] = {
    "name": "Сумма от 1 до N",
    "tests": [{"data":"100", "answer":5050, "sample":true}, {"data":"999999", "answer":499999500000, "sample":false}, {"data":"111111111", "answer":6172839549382716, "sample":false}],
    "statement": "Написать функцию, результатом которой является сумма чисел от 1 до N.<br>N - строка;<br>Результат - число.",
    "code": "function (number) {\n\
                var result = 0;\n\
                for (var i=0; i<= +number; i++) {\n\
                    result = result + i;\n\
                }\n\
                return    result;\n\
            }"
}

problems[5] = {
    "name": "Количество слов",
    "tests": [{"data":"Lorem ipsum dolor sit amet", "answer":4, "sample":true}, {"data":"Винни-Пух съел весь мёд", "answer":3, "sample":true}, {"data":"Петя купил упаковку сухариков", "answer":3, "sample":false}, {"data":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "answer":18, "sample":false}],
    "statement": "Написать функцию, результатом которой является количество слов в строке.<br>string - исходная строка;<br>Результат - число.",
    "code" : "function (string) {\n\
                var spaceInArray = string.split(' ');\n\
                var result = spaceInArray.length - 1;\n\
                return    result;\n\
            }"
}