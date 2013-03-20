﻿$(document).ready(function() {
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
        $('#ResultTable').html('');
        $('#TestProcess').html('');
        $('#Error').html('');
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        TestProblem();
        return false;
    });
    
    $('#ProblemId').change(function() {ShowStatement(problems[this.value]);});
});