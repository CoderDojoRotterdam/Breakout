/*
    ******************
    *** Variabelen ***
    ******************
*/

// Zet je variabelen hier


/*
    *********************************
    *** OPDRACHT 1: Maak een balk ***
    *********************************
*/

function maakEenBalk(){
    
    // Code hier
    
    // Verander null naar balk
    return null;
}

/*
    ***********************************************************
    *** OPDRACHT 2: Balk laten bewegen met het toetsenbord! ***
    ***********************************************************
*/

function beweegBalk(){
    
    // Code hier
}

/*
    ****************************************
    *** OPDRACHT 3: Een stuiterende bal! ***
    ****************************************
*/

function maakEenBal(){
    
    // Code hier
    
    // Verander null naar balletje
    return null;
}

/*
    **********************************
    *** OPDRACHT 4: Blokken maken! ***
    **********************************
*/

function blokkenMaker(){
   
    // Code hier
   
    // Verander null naar blokken
    return null;
   
}

/*
    *************************
    *** OPDRACHT 4: EXTRA ***
    *************************
*/

// Automagische blokken generator
function blokGenerator(){
    
     /*
        Dit is een array met hoe de blokken zullen worden gemaakt. De nummers hieronder staan voor de kleur van het blokje en heb ik zelf vastgesteld.
        De kleuren die je kunt gebruiken, zijn:
        
        0 = groen
        1 = blauw
        2 = rood
    */
    var blokKleur = [
        
        "0", "2", "2", "2", "0", "2", "2", "0", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "0", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "0", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "1", "0", 
        "0", "2", "2", "2", "0", "2", "2", "0", "0", "1", "0", "0" 
    ];
    
    /*
        Dit stuk code is het hart van het maken van blokken op een makelijk manier.
        
        Dit is dus een for loop die bij elke ronde een nieuw blok toevoegd. Bij elke ronde wordt er ook
        een berekening gedaan om ze netjes naast elkaar te zetten. En met hulp van de blokKleur array, worden 
        de kleuren dynamisch ingeladen.
        
        
    */
    
    // De afstand Y tegenover andere blokken
    var nextRow = 0;
    
    // De afstand X tegenover andere blokken
    var nextColumn = 0;
    
    // Een for loop om de blokken te maken. 
    for(var i = 0; i < blokKleur.length; i++){
        
        // Bij elke loop, een nieuw blok toevoegen met de berekende variabelen en gegeven blok kleur
        blokken.push(new Brick(50 + ((41 * nextColumn) + (10 * nextColumn)), 100 + nextRow, blokKleur[i]));
        
        /*
            Iedere 12 blokjes schuiven we een regel op naar beneden en gaan we daar verder met het tekenen
            van de blokjes. De newRow (y) wordt met 20 pixels verhoogd en de nextColumn wordt verhoogd met 1.
        */
        
        if((i+1)%12 == 0 && i > 0){

            nextRow = nextRow + 20;
            nextColumn = 0;
            
        }else{ nextColumn++; }
    }
}


/*
    *************************************************
    *** OPDRACHT 5: Botsing tussen bal en blokken ***
    *************************************************
*/

function raakBlok(){
    
    // Code hier
}

// Hulp Functie om de botsingen te detecteren
function controleerBotsing(spriteA, spriteB){

    return Phaser.Rectangle.intersects(spriteA, spriteB);
}

