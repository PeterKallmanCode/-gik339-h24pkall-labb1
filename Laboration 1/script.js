  let name = "Peter";
  console.log(name);
{
    let y = 5; 
    const x = 4;
    var a = 3;
    console.log('3' == 3);
    console.log('3' === 3);
    console.log(NaN === NaN);
    console.log(null == undefined);
    console.log(null === undefined);
}

// "name" variabeln går inte att skriva ut då den är deprecated 
// console.log(name);


console.log(a);
// Testar om undefined är truthy eller falsy
console.log(undefined ? "Truthy" : "Falsy");

/* Reflektion Uppgift 2: 

1. Skillnader mellan blocken:
-Let: 
Existerar inuti blocket där den deklareras.

-Const:
Existerar inuti blocket där den deklareras.

-Var:
Kan existera utanför blocket där den deklareras. 


2. Skillnader med var man lägger "console.log();":
Om vi försöker lägga console.log med en let eller const utanför blocket där den deklareras,
så går inte detta att exekvera. Var går att använda utanför blocket där den deklrareras, men kan returnera "undefined",
vilket gör det svårt att felsöka i större program.  

*/



/* Reflektion Uppgift 3: 

1. Förklara hur outputs mellan "==" och "===" skiljer sig:
Det som skiljer sig i output när man jämför med "==" och "===" är att "==" gör typkonvertering innan den jämför medans "===" inte gör det.
Exempel:
'5' == 5 blir true medans '5' === 5 blir false


2. Skillnader om ett uttryck står ensamt i en ifsats eller en teneary operator:
Om vi använder två ifsatser som exempel:

1.
if (undefined == false) {
    console.log("Sant, den är falsk");
}

2.
if (undefined) {
    console.log("Sant, den är falsk");
}

När uttrycket står för sig själv sker endast en typkonvertering (eftersom undefined redan har true eller false).
I exempel två med jämförelseoperatorn "==", så sker det en jämförelse, där man undersöker om "undefined" är lika med något annat.


3. Förklaring vad NaN, Null och Undefined representerar:

Undefined:
Betyder att variabeln saknar värde.

Null:
Betyder att variabeln har just ETT värde, vilket är null.

NaN: 
Står för "not a number". Det finns ett värde, men det är inget tal.

*/



/* Reflektion uppgift 4:

1. Skillnader på olika funktioner: 

Funktionsdeklaration:
En funktionsdeklaration skapar en ny funktion med ett visst namn. 
Med hjälp av en funktionsdeklaration kan man skapa exempelvis:
function calcSum(x, y) {
    return x + y;
}
I javascript "hoistas" funktioner som är byggda på detta sättet, vilket innebär oavsett vad 
funktionen står i koden så tas den direkt upp i minnet när programmet körs. 

Funktionsuttryck:
Ett funktionsuttryck är likt en funktionsdeklaration, bara att det inte hoistas, och istället för att skapa
funktionen direkt, så lagras funktionen inuti en variabel. 
Exempelvis: 
const addition = function calcSum(x, y) {
    return x + y;
}

Arrowfunktion:
En arrowfunktion fungerar liknande en "vanlig" funktion, fast tecknet => ersätter ordet "function" och även "return".

Varför jag valde den funktionstypen jag valde:
Jag valde att göra ett funktionsyttryck dels för att testa funktionalitet, men också för att inte ta upp onödig prestanda genom att hoista.


2. Reflektion (var vi kan anropa våra funktioner):

Detta beror på vilken funktionstyp vi använder. En funktionsdeklaration går att anropa även innan man skapar programmet.
Detta har och göra med "hoisting", som tidigare förklarat. Ett funktionsuttryck går bara att anropa efter skapandet av funktionen,
eller närmare bestämt variabeln som lagrar funktionen. 


3. Vad som händer man man ändrar variabeln/parametern name:

Det går att ändra variabeln och parametern name oberoende av varandra, utan att den andra påverkas. 


4. Skillnad parameter, variabel och argument:
Parameter:
En parameter är de namn som skapas som "placeholders" när man skapar en funktion.
Parametern väntar sedan på argument. 
 
Variabel:
En variabel är en behållare i vilken man lagrar ett värde.

Argument: 
Ett eller fler värden som skickas in till en funktion när den anropas. 
*/