var button = document.getElementsByTagName('input')[0];

button.onclick = function() {
    myCodeMirror.save();
    var id = select.value;
    var code = TextArea.value;
    f = eval('(' + code + ')');
    if (id > 0) {
        TestProcess.innerHTML = 'Testing... Do not close the page.';
        PrintTableHead();
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems, id, f)
        }
    } else {
        table.innerHTML = '* Select problem.';
    }
    setTimeout(function () {TestProcess.innerHTML = 'Done.'}, 0);
    return false;
}