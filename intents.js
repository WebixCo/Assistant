let intents = {
  "NoteStuff": {
    "intents": [
      "take note",
      "make a note",
      "onyx notes"
    ],
    "commands": [
      function(){
        let notename = prompt("Note Name");
        let notetext = prompt("Note Text");
        localStorage.setItem(notename, notetext);
        localStorage.setItem('count', parseInt(localStorage.getItem('count'))+1);
      },
      function(){
        let notename = prompt("Note Name");
        let notetext = prompt("Note Text");
        localStorage.setItem(notename, notetext);
        localStorage.setItem('count', parseInt(localStorage.getItem('count'))+1);
      },
        function(){
            window.open("https://onyxassistant.samdevsapps.repl.co/onyxnotes/")
        }
    ]
  },
  "Openers": {
    "intents": [
      "open google",
      "go to google",
      "open youtube",
      "go to youtube",
      "open duckduckgo",
      "go to duckduckgo"
    ],
    "commands": [
      function(){
        window.open("http://google.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
      function(){
        window.open("http://google.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
        function(){
        window.open("http://youtube.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
      function(){
        window.open("http://youtube.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
      function(){
        window.open("http://duckduckgo.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
      function(){
        window.open("http://duckduckgo.com")
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx opened Google</b> " + "<br>";
        say("Opening...")
      },
    ]
  },
  "Other": {
    "intents": [
      "what is",
      "what's",
      "whats",
      "ask google",
      "do a google search",
      "search for"
    ],
    "commands": [
      function(q){
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q + "'<br>";
        say("Asking Google")
        answer(q)
      },
      function(q){
        
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q + "'<br>";
        say("Asking Google")
        answer(q)
      },
      function(q){
        var output = document.getElementById("output")
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q + "'<br>";
        say("Asking Google")
        answer(q)
      },
      function(q){
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q.split("ask google ")[1] + "'<br>";
        say("Asking Google")
        answer(q.split("ask google ")[1])
      },
      function(q){
        
        var output = document.getElementById("output");
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q.split("do a google search ")[1] + "'<br>";
        say("Asking Google")
        answer(q.split("do a google search ")[1])
      },
        function(q){
        var output = document.getElementById("output")
        output.innerHTML = output.innerHTML + "<b>Onyx asked google for '" + q.split("search for ")[1] + "'<br>";
        say("Asking Google")
        answer(q.split("search for ")[1])
      }
    ]
  }
}


//Ignore this
window.addEventListener('offline', () => {
    window.location.reload();
});