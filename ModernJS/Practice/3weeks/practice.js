var migni = "Hello migni";
var dongyeop = "I am dongyeop";

function wisoft() {
    console.log(migni);

    function professorPark() {
        var dongyeop = "Hey dongyeop";
        console.log(dongyeop);
    }
    function doctorJeon() {
        var migni = "Where is Mingi?";

        console.log(migni);
    }

    doctorJeon();
    professorPark();
}

wisoft();


console.log(dongyeop);