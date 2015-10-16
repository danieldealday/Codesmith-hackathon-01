chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "popup.html";
  chrome.tabs.create({ url: newURL });
});

var messages = [
"If it makes you happy, do it. If it doesn\'t, then don\'t.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Say what you are thinking, not what you think you should say.",
"Don\'t hold back.",
"Nothing to prove. Everything to improve.",
"Before you find your soulmate, you must first discover your soul.",
"When I control my mind, I control my life.",
"Whatever your dream is, every extra penny you have should be going to that.",
"Do as you wish. Be as you are.",
"Small changes can make a big difference.",
"Vulnerability is the only bridge to build connection.",
"Master the art of observing.",
"Worth can\'t be measured. It can only be celebrated through growth of what you\'ve become or whatever else you with to mold into.",
"I thought about quitting then I noticed who was watching.",
"Just keep moving forward and don\'t give a shit about what anybody thinks. Do what you have to do for you. - Johnny Depp",
"Life isn\'t about finding yourself. Life is about creating yourself.",
"The most memorable moments in life are the ones you never planned.",
"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.",
"The price of greatness is responsibility.",
"Life only comes around once, so do whatever makes you happy, and be with whoever makes you smile.",
"Be who you needed when you were younger.",
"Never lose yourself loving someone else. Always remember who you are.",
"I may not be there yet, but I\'m closer than I was yesterday.",
"The things you regret most in life are the risks you didn\'t take.",
"Happiness is all about loving what you have and being grateful for it. Never lose sight of your blessings.",
"You have to go through the worst to get to the best.",
"It doesn\'t matter how fast of how slow you go. Just don\'t stop.",
"Never lose hope. You never know what tomorrow may bring. There is always a chance to change and make things right.",
"Be so good they can\'t ignore you. - Steve Martin",
"Always end the day with a positive thought. No matter how hard things were, tomorrow is a fresh opportunity to make it better.",
"Happiness isn\'t about getting what you want all the time. It\'s about loving what you have and being grateful for it.",
"I will never apologize for being me. You should apologize for asking me to be anything else.",
"Whatever you decide to do, make sure it makes you happy.",
"Have a clear purpose.",
"Don\'t change to please people. If they can\'t accept you for who you are, you don\'t need them in your life.",
"it\'s all about looking forward and being excited about whatever it is you have planned for your future.",
"People aren\'t always going to be there for you, that\'s why you gotta learn to handle things on your own.",
"Good judgement comes from experience. A lot of experience comes from bad judgement.",
"Life is better when you\'re laughing.",
"It\'s not the speed that matters. Its the direction.",
"If you\'re still looking for for that one person who can change your life, take a look in the mirror.",
"Set some goals and do something positive with your life.",
"If you\'re lucky enough to get a second chance at something, don\'t waste it.",
"You have to be odd to be number one. - Dr. Seuss",
"Work like most people won\'t so you can live like most people can\'t."]

// function reloadPage() {


 
function displayMessage () {
  var quote = document.createElement("div");
  quote.setAttribute("id", "bg")
  quote.innerHTML = '<h1>"' + messages[Math.ceil(Math.random()*10)] + '"</h1>';
  document.body.appendChild(quote);

  var color = '#';
  var pallette = ["32cba3", "1abc9c", "2ecc71", "3498db", "9b59b6", "34495e", "f1c40f", "e67e22", "e74c3c", "bdc3c7", "7f8c8d"];
  color += pallette[Math.floor(Math.random() * pallette.length)];
  document.body.style.background = color;
}
displayMessage();

function moreQuotes () {
	var more = document.createElement("button");
	more.setAttribute("id", "more");
	more.setAttribute("onclick", "refresh()");    
	more.innerHTML = 'More Randos Quotas';
	document.body.appendChild(more);
}
moreQuotes();

function refresh () {
  document.getElementById("bg").innerHTML = '<h1>"' + messages[Math.ceil(Math.random()*10)] + '"</h1>';
}