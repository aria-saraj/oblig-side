let liste = [];

/**
 * The button "Kjøp billlett" will be functionable
 * The function will make an object of the values that are put in
 */
function kjopBillett() {


    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;
    let error = false;


    // We will make an If sentence to check that all the input-boxes has a value, if not then error.msg.
    if (film === "Velg film") {
        document.getElementById("filmfeilmelding").innerText = "Velg en film!"
        error = true;
    } else {
        document.getElementById("filmfeilmelding").value = "";
    }
    if (antall === "") {
        document.getElementById("antallfeilmelding").innerText = "Velg antall!"
        error = true;
    } else {
        document.getElementById("antallfeilmelding").value = "";
    }
    if (fornavn === "") {
        document.getElementById("navnfeilmelding").innerText = "Skriv fornavn!"

        error = true;
    } else {
        document.getElementById("navnfeilmelding").value = "";

    }
    if (etternavn === "") {
        document.getElementById("etternavnfeilmelding").innerText = "Skriv etternavn!"

        error = true;
    } else {
        document.getElementById("etternavnfeilmelding").value = "";
    }
    if (telefonnr === "") {
        document.getElementById("tlffeilmelding").innerText = "Skriv tlf.nr!"
        error = true;
    } else {
        document.getElementById("tlffeilmelding").value = "";

    }
    if (epost === "") {
        document.getElementById("epostfeilmelding").innerText = "Skriv e-post!"
        error = true;
    } else {
        document.getElementById("etternavnfeilmelding").value = "";
    }
    if (error === false) {
        const person = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        liste.push(person);

        document.getElementById("film").value = "Velg film her";
        document.getElementById("fornavn").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("tlf").value = "";
        document.getElementById("epost").value = "";

        document.getElementById("filmfeilmelding").value = "";
        document.getElementById("antallfeilmelding").value = "";
        document.getElementById("navnfeilmelding").value = "";
        document.getElementById("etternavnfeilmelding").value = "";
        document.getElementById("tlffeilmelding").value = "";
        document.getElementById("epostfeilmelding").value = "";

        visKjop();
    }


// If statment som sjekker om det er noen tom elementer og om det er valgt et film. Hvis true blir objektet lagt til arrayet

    function visKjop() {
        let ut = "<table id='table'><tr>" + "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";

        for (let i of liste) {
            ut += "<tr>";
            ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>"
                + i.fornavn + "</td><td>" + i.etternavn + "</td><td>"
                + i.telefonnr + "</td><td>" + i.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("liste").innerHTML = ut;
        document.getElementById("table").style.borderSpacing = "15px";

    }
}
/**
 * A fuction made for the delete button
 * deletes log.
 */
function slettAlt() {
    liste.length = 0;
    document.getElementById("liste").innerHTML = '';


}