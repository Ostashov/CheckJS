$(document).ready(function() {
<<<<<<< HEAD
    // $('#SubmitButton').mouseover(function() {
    //     $(this).attr('src', 'img/buttons/Submit_hover.png')
    // });
    // $('#SubmitButton').mouseout(function() {
    //     $(this).attr('src', 'img/buttons/Submit_default.png')
    // });
    // $('#SubmitButton').mousedown(function() {
    //     $(this).attr('src', 'img/buttons/Submit_active.png')
    // });
    // $('#SubmitButton').mouseup(function() {
    //     $(this).attr('src', 'img/buttons/Submit_hover.png')
    // });
=======
//TODO
    $('#submitButton').mouseover(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
    $('#submitButton').mouseout(function() {
        $(this).attr('src', 'img/buttons/Submit_default.png')
    });
    $('#submitButton').mousedown(function() {
        $(this).attr('src', 'img/buttons/Submit_active.png')
    });
    $('#submitButton').mouseup(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
>>>>>>> master
    
    $('#submitButton').click(function() {
        $('#howWork').hide();
        $("#counterTest").hide();
        $('#testProcess').hide();
        $('#resultTable').html('');
        $('#testProcess').html('');
        $('#Error').html('');
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        var problemId = $('#problemId').val();
        var Code = $('#Code').val();
        if (!Code) {
            observable.publish({'message':'noCode'});
        } else {
<<<<<<< HEAD
            $('#SubmitButton').addClass('disabled');
            $('#SubmitButton').attr('disabled');
            TestProblem(ProblemId, Code);
=======
            testProblem(problemId, Code);
>>>>>>> master
        }
        return false;
    });
    
    $('#problemId').focus(function() {
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        problems[$('#problemId').val()].code = $('#Code').val();
    });
    
<<<<<<< HEAD
    $('#ProblemId').change(function() {
        ShowStatement(problems[this.value]);
        $('#howWork').removeAttr('hidden');
        $('#TestProcess').attr('hidden', 'true');
        var ResultTable = $('#ResultTable');
        ResultTable.addClass('hide');
=======
    $('#problemId').change(function() {
        showStatement(problems[this.value]);
        $('#howWork').show();
        $("#counterTest").hide();
        $('#testProcess').hide();
>>>>>>> master
    });
});