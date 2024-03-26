function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += lastMonth.getDate();
        months--;
    }

    document.getElementById('result').innerText = "Your age is: " + years + " years, " + months + " months, and " + days + " days.";
}

function resetFields() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').innerText = '';
}
