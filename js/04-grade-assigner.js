let grade = parseInt(prompt("What final percent did you receive in the class? Enter 1-100"))

if (isNaN(grade)) {
    alert('Not a valid number.  Enter a number between 1 and 100')
} else {
    if (grade <60){
        alert("You received an F.")

    } else if (grade >= 60 && grade <= 69) {
        alert("You received a D")
    } else if (grade >= 70 && grade <= 79) {
        alert("You received a C")
    } else if (grade >= 80 && grade <= 89) {
        alert("You received a B")
    } else if (grade >= 90 && grade <= 100) {
        alert("You received an A")
    }
}

