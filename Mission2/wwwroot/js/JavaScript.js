const assignmentWeight = .55
const groupProjectWeight = .05
const quizWeight = .10
const examWeight = .20
const intexWeight = .10

var assignment = 0
var groupProject = 0
var quiz = 0
var exam = 0
var intex = 0
var finalPercentage = ""
var finalLetterGrade = ""

//this code pulls the input

$("#btnSend").click(function () {
    assignment = $("#txtAssignment").val();
    groupProject = $("#txtGroupProject").val();
    quiz = $("#txtQuiz").val();
    exam = $("#txtExam").val();
    intex = $("#txtINTEX").val();


    //finalPercentage
    finalPercentage = (assignment * assignmentWeight) + (groupProject * groupProjectWeight) + (quiz * quizWeight) + (exam * examWeight) + (intex * intexWeight);

    //finalLetterGrade
    if (finalPercentage >= 94) {
        finalLetterGrade = 'A'
    }
    else if (finalPercentage >= 90) {
        finalLetterGrade = 'A-'
    }
    else if (finalPercentage >= 87) {
        finalLetterGrade = 'B+'
    }
    else if (finalPercentage >= 84) {
        finalLetterGrade = 'B'
    }
    else if (finalPercentage >= 80) {
        finalLetterGrade = 'B-'
    }
    else if (finalPercentage >=77) {
        finalLetterGrade = 'C+'
    }
    else if (finalPercentage >= 74) {
        finalLetterGrade = 'C'
    }
    else if (finalPercentage >= 70) {
        finalLetterGrade = 'C-'
    }
    else if (finalPercentage >= 67) {
        finalLetterGrade = 'D+'
    }
    else if (finalPercentage >= 64) {
        finalLetterGrade = 'D'
    }
    else if (finalPercentage >= 60) {
        finalLetterGrade = 'D-'
    }
    else if (finalPercentage < 60) {
        finalLetterGrade = 'E'
    }
    else {
        'You must not have inputted a number in a field. Please refresh the page and start over'
    }

    //output
    output = `Your final percentage is: ${finalPercentage}. Your final letter grade is: ${finalLetterGrade}`
    document.getElementById("output").innerHTML = output
    return output;
})