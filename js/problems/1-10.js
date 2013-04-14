"use strict;"
var problems = [];
problems[1] = {
    "name": "A+B",
    "tests": [{"data":[101,20], "answer":121, "sample":true}, {"data":[0,9019], "answer":9019, "sample":true}, {"data":[1,1], "answer":2, "sample":false}, {"data":[1000, -900], "answer":100, "sample":false}, {"data":[1010101, 10], "answer":1010111, "sample":false}, {"data":[9, -9], "answer":0, "sample":false}, {"data":[99999, 1], "answer":100000, "sample":false}, {"data":[0, 0], "answer":0, "sample":false}, {"data":[-1, -1], "answer":-2, "sample":false}, {"data":[555, 445], "answer":1000, "sample":false}],
    "statement": "Написать функцию, результатом которой является сумма двух чисел А и В.<br><br><b>Входные данные:</b><br>Функция принимает один аргумент - массив из двух чисел [A, B].<br><br><b>Выходные данные:</b><br>Результатом функции является одно число.",
    "code" : "function sum(data) {\n\
    var result = data[0] + data[1];\n\
    return result;\n\
}"
}

problems[2] = {
    "name": "Сумма от 1 до N",
    "tests": [{"data":"100", "answer":5050, "sample":true}, {"data":"999999", "answer":499999500000, "sample":false}, {"data":"111111111", "answer":6172839549382716, "sample":false}],
    "statement": "Написать функцию, результатом которой является сумма чисел от 1 до N.<br><br><b>Входные данные:</b><br>Функция принимает один аргумент - строку, содержащую число N.<br><br><b>Выходные данные:</b><br>Результатом функции является одно число.",
    "code": ""
}

problems[3] = {
    "name": "Сумма цифр числа",
    "tests": [{"data":"12345", "answer":15, "sample":true}, {"data":"990", "answer":18, "sample":true}, {"data":"1", "answer":1, "sample":false}, {"data":"1010101", "answer":4, "sample":false}, {"data":"0", "answer":0, "sample":false}],
    "statement": "Написать функцию, результатом которой является сумма цифр исходного числа.<br><br><b>Входные данные:</b><br>Функция принимает один аргумент - строку, содержащую исходное число.<br><br><b>Выходные данные:</b><br>Результатом функции является одно число.",
    "code": "function digitSum(number){\n\
    for (var i = 0; i <= number.length; i++) {\n\
    ...\n\
    }"
}

problems[4] = {
    "name": "Количество слов",
    "tests": [{"data":"Lorem ipsum dolor sit amet", "answer":5, "sample":true}, {"data":"Винни-Пух съел весь мёд", "answer":4, "sample":true}, {"data":"Петя купил упаковку сухариков", "answer":4, "sample":false}, {"data":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "answer":19, "sample":false}],
    "statement": "Написать функцию, результатом которой является количество слов в строке.<br><br><b>Входные данные:</b><br>Функция принимает один аргумент - исходную строку.<br><br><b>Выходные данные:</b><br>Результатом функции является одно число.",
    "code": "function wordCount(text) {\n\
    var wordInArray = text.split(' ');\n\
    ..."
}

problems[5] = {
    "name": "Коробки",
    "tests": [{"data":[2,6], "answer":'YES', "sample":true},{"data":[8,12], "answer":'NO', "sample":true},{"data":[1,1], "answer":'YES', "sample":false},{"data":[1,2], "answer":'NO', "sample":false},{"data":[1,3], "answer":'YES', "sample":false},{"data":[7,9], "answer":'YES', "sample":false},{"data":[21,21], "answer":'YES', "sample":false},{"data":[7,45], "answer":'NO', "sample":false},{"data":[37,37], "answer":'YES', "sample":false},{"data":[160528195,6186685], "answer":'YES', "sample":false},{"data":[780572391,930703641], "answer":'YES', "sample":false},{"data":[1000000000,1000000000], "answer":'YES', "sample":false},{"data":[566413175,465830722], "answer":'NO', "sample":false},{"data":[515147294,241062674], "answer":'NO', "sample":false}],
    "statement": "Есть две коробки. В первой находится <i>a</i> шаров, во второй <i>b</i>. Шары разрешается перекладывать из одной коробки в другую. Причем перекладывать в любую из коробок можно только столько шаров, сколько в ней находится. Необходимо написать функцию, которая определяет, можно ли все шары сложить в одну коробку.<br><br><b>Входные данные:</b><br>Функция принимает один аргумент - массив из двух натуральных чисел <i>a</i> и <i>b</i> (1 ≤ a,b ≤ 10<sup>9</sup>).<br><br><b>Выходные данные:</b><br>Функция возвращает «YES», если все шары можно переложить в одну коробку, и «NO», если нельзя.",
    "code": ""
}