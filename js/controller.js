$(document).ready(function() {
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
        showStatement(problems[this.value]);
        $('#howWork').show();
        $("#counterTest").hide();
        $('#testProcess').hide();
    });
});