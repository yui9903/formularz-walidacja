function formularz() {
    let imie = document.getElementById("imie").value.trim();
    let nazwisko = document.getElementById("nazwisko").value.trim();
    let haslo = document.getElementById("haslo").value;

    if (imie === "" || nazwisko === "" || haslo === "") {
        document.getElementById("wiad").innerHTML = "To pole musi być wypełnione!!!";
    } else if (haslo.length <= 5) {
        document.getElementById("wiad").innerHTML = "Hasło jest za krótkie";
    } else {
        document.getElementById("wiad").innerHTML = "Ładnie wpisałeś wszystkie dane!";
    }
}
