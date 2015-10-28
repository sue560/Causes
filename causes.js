$(document).ready(function() {
  $("#getQuote").click(function(){
    // var result = getMessage();
     $(".quote").text(getMessage())
   });
  function getMessage() {
      var messages = [
      "Free trade is terrible. Free trade can be wonderful if you have smart people. But we have stupid people.",
      "The U.S. has become a dumping ground for everybody else's problems. Thank you. It's true.",
      "When was the last time anybody saw us beating, let's say, China in a trade deal? They kill us. I beat China all the time. All the time.",
      "I would build a great wall, and nobody builds walls better than me, believe me.",
      "I have so many web sites, I have them all over the place. I hire people, they do a web site. It costs me $3.",
      "I have a total net worth [of] well-over $10 billion.... I'm not doing that to brag, because you know what? I don't have to brag. I don't have to, believe it or not.",
      "Some of the candidates, they went in and didn’t know the air conditioner didn’t work and sweated like dogs, and they didn’t know the room was too big because they didn’t have anybody there. How are they going to beat ISIS?",
      "I will be the greatest jobs president that God ever created.",
      "We need a leader that wrote The Art of the Deal.",
      "When Mexico sends its people, they’re not sending their best. They’re sending people that have lots of problems. They’re bringing drugs. They’re bringing crime. They’re rapists.",
    ];
    // return messages[Math.floor(Math.random()*messages.length)]
    var randomMessage = messages[Math.floor(Math.random()*messages.length)];
    return randomMessage;
   }  
  });

   