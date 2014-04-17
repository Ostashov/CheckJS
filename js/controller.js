$(document).ready(function() {
//TODO
    $('#SubmitButton').mouseover(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
    $('#SubmitButton').mouseout(function() {
        $(this).attr('src', 'img/buttons/Submit_default.png')
    });
    $('#SubmitButton').mousedown(function() {
        $(this).attr('src', 'img/buttons/Submit_active.png')
    });
    $('#SubmitButton').mouseup(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
    
    $('#SubmitButton').click(function() {
        $('#howWork').hide();
        $('#ResultTable').html('');
        $('#TestProcess').html('');
        $('#Error').html('');
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        var problemId = $('#problemId').val();
        var Code = $('#Code').val();
        if (!Code) {
            observable.publish({'message':'noCode'});
        } else {
            testProblem(problemId, Code);
        }
        return false;
    });
    
    $('#problemId').focus(function() {
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        problems[$('#problemId').val()].code = $('#Code').val();
    });
    
    $('#problemId').change(function() {
        ShowStatement(problems[this.value]);
        $('#howWork').show();
        $("#counterTest").hide();
        $('#TestProcess').hide();
    });
});