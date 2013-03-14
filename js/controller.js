$(document).ready(function() {
    $('#SubmitButton').click(function() {
        //myCodeMirror.save();
        var id = $('#ProblemId').val();
        var code = $('#Code').val();
        var TestProcess = $('#TestProcess');
        f = eval('(' + code + ')');
        TestProcess.html('Testing... Do not close the page.');
        PrintTableHead();
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems[id], f)
        }
        setTimeout(function () {TestProcess.html('Done.');}, 0);
        return false;
    });
    
    $('#ProblemId').change(function() {ShowStatement(problems[this.value]);});
});