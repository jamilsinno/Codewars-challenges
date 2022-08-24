// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
	return language === 'czech' ? 'Vitejte'
    : language === 'danish' ? 'Velkomst'
    : language === 'dutch' ? 'Welkom'
    : language === 'estonian' ? 'Tere tulemast'
    : language === 'finnish' ? 'Tervetuloa'
    : language === 'flemish' ? 'Welgekomen'
    : language === 'french' ? 'Bienvenue'
    : language === 'german' ? 'Willkommen'
    : language === 'irish' ? 'Failte'
    : language === 'italian' ? 'Benvenuto'
    : language === 'latvian' ? 'Gaidits'
    : language === 'lithuanian' ? 'Laukiamas'
    : language === 'polish' ? 'Witamy'
    : language === 'spanish' ? 'Bienvenido'
    : language === 'swedish' ? 'Valkommen'
    : language === 'welsh' ? 'Croeso' 
    : "Welcome"
}