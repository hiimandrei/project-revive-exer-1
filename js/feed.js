//Body
var element = document.body;

//Sidebar
var sidebarAnchors = document.getElementsByClassName("sidebar-anchor");
var writeIcon = document.getElementsByClassName("write-icon")[0];
var userHandle = document.getElementsByClassName("frecom_handle sidenav")[0];

//Feed
var feed = document.getElementsByClassName("main")[0];
var header = document.getElementsByClassName("header")[0];
var footer = document.getElementById("footer");
var tweetInput = document.getElementById("tweet-input");
var tweetTexts = document.getElementsByClassName("tweet_caption");
var tweetBoxes = document.getElementsByClassName("personal_tweet");

//Right panel
var searchIcon = document.getElementsByClassName("search_icon")[0];
var searchField = document.getElementsByClassName("search_field")[0];
var trends = document.getElementsByClassName("trends")[0];
var trendItems = document.getElementsByClassName("trend_item");
var trendFooter = document.getElementsByClassName("trend_footer")[0];
var followRecom = document.getElementsByClassName("follow_recom")[0];
var frecomItems = document.getElementsByClassName("frecom_item");
var frecomFooter = document.getElementsByClassName("frecom_footer")[0];

function darkTheme(){
	//Body
	element.style.backgroundColor="#141d26";
	element.style.color="#FFF";

	//Sidebar
	writeIcon.style.backgroundColor = "#141d26";
	userHandle.style.color="#FFF"
	for(i = 0; i < sidebarAnchors.length; i++){
		sidebarAnchors[i].style.color = "#FFF";
	}

	//Feed
	header.style.backgroundColor="#141d26";
	header.style.color="#FFF";
	header.style.borderColor="#657786";
	tweetInput.style.backgroundColor="#141d26";
	tweetInput.style.color="#FFF";
	footer.style.backgroundColor="#141d26";
	footer.style.borderColor="#657786";
	

	for(i = 0; i < tweetBoxes.length; i++){
		tweetBoxes[i].style.borderColor = "#657786";
	}
	for(i = 0; i < tweetTexts.length; i++){
		tweetTexts[i].style.color = "#FFF";
	}

	//Right panel
	searchIcon.style.color="#e1e8ed";
	searchField.style.color="#e1e8ed";
	searchIcon.style.backgroundColor="#657786";
	searchField.style.backgroundColor="#657786";
	trends.style.backgroundColor="#243447";
	trendFooter.style.borderColor="#657786";
	followRecom.style.backgroundColor="#243447";
	frecomFooter.style.borderColor="#657786";

	for(i = 0; i < trendItems.length; i++){
		trendItems[i].style.borderColor = "#657786";
	}
	for(i = 0; i < frecomItems.length; i++){
		frecomItems[i].style.borderColor = "#657786";
	}
}

function lightTheme(){
	//Body
	element.style.backgroundColor="#FFF";
	element.style.color="#000";

	//Sidebar
	writeIcon.style.backgroundColor = "#FFF";
	userHandle.style.color="#000"
	for(i = 0; i < sidebarAnchors.length; i++){
		sidebarAnchors[i].style.color = "#000";
	}

	//Feed	
	header.style.backgroundColor="#FFF";
	header.style.color="#000";
	header.style.borderColor = "#e1e8ed";
	tweetInput.style.backgroundColor="#FFF";
	tweetInput.style.color="#000";
	footer.style.backgroundColor="#FFF";
	footer.style.borderColor = "#e1e8ed";

	for(i = 0; i < tweetBoxes.length; i++){
		tweetBoxes[i].style.borderColor = "#e1e8ed";
	}
	for(i = 0; i < tweetTexts.length; i++){
		tweetTexts[i].style.color = "#000";
	}

	//Right panel
	searchIcon.style.color="gray";
	searchField.style.color="gray";
	searchIcon.style.backgroundColor="#e1e8ed";
	searchField.style.backgroundColor="#e1e8ed";
	trends.style.backgroundColor="#f5f8fa";
	trendFooter.style.borderColor="#e1e8ed";
	followRecom.style.backgroundColor="#f5f8fa";
	frecomFooter.style.borderColor="#e1e8ed";

	for(i = 0; i < trendItems.length; i++){
		trendItems[i].style.borderColor = "#e1e8ed";
	}
	for(i = 0; i < frecomItems.length; i++){
		frecomItems[i].style.borderColor = "#e1e8ed";
	}
}


function toggleTheme(){
	var element = document.body;
	var lightToggle = document.getElementById("check");

	if(lightToggle.checked === true){
		darkTheme();
	}else{
		lightTheme();
	}
}

function inputFocus() {
	document.getElementById("tweet-input").focus();
	window.scrollTo(0, 0);
}

function saveTweet(){
	localStorage.setItem(localStorage.length.toString(), tweetInput.value);
}

function makeTweetItem(tweetContent){
	const newTweet = document.createElement("div");
	newTweet.setAttribute("class", "personal_tweet");
	
	const userIcon = document.createElement("img");
	userIcon.setAttribute("class", "tweet_icon");
	userIcon.setAttribute("src", "static/imgs/twitterbaby.jpg");
	userIcon.setAttribute("alt", "User Icon");
	
	const nonIcon = document.createElement("div");
	const twitterHandle = document.createElement("div");
	const twitterAddress = document.createElement("div");
	const tweetText = document.createElement("div");

	nonIcon.setAttribute("class", "non-icon");
	twitterHandle.setAttribute("class","twitter_handle");
	twitterAddress.setAttribute("class","twitter_address");
	tweetText.setAttribute("class","tweet_caption");

	twitterHandle.innerText = "random ";
	twitterAddress.innerText = "@hiimrandom";
	tweetText.innerText = tweetContent;

	const userInteraction = document.createElement("div")
	const commentIcon = document.createElement("i")
	const retweetIcon = document.createElement("i")
	const heartIcon = document.createElement("i")
	const shareIcon = document.createElement("i")

	userInteraction.setAttribute("class","user_interaction");
	commentIcon.setAttribute("class","far fa-comment");
	retweetIcon.setAttribute("class", "fas fa-retweet");
	heartIcon.setAttribute("class", "far fa-heart");
	shareIcon.setAttribute("class", "fas fa-share-alt");

	userInteraction.appendChild(commentIcon)
	userInteraction.appendChild(retweetIcon)
	userInteraction.appendChild(heartIcon)
	userInteraction.appendChild(shareIcon)

	nonIcon.appendChild(twitterHandle)
	nonIcon.appendChild(twitterAddress)
	nonIcon.appendChild(tweetText)
	nonIcon.appendChild(userInteraction)

	newTweet.appendChild(userIcon)
	newTweet.appendChild(nonIcon)

	tweetBoxes[0].parentNode.insertBefore(newTweet, tweetBoxes[0].nextSibling);
}

function postTweet(){
	if(tweetInput.value === ""){
		return;
	}

	makeTweetItem(tweetInput.value);
	saveTweet();
	toggleTheme();

	tweetInput.value="";
}

function loadTweets(){
	for(i = 0; i < localStorage.length; i++){
		makeTweetItem(localStorage.getItem(i.toString()));
	}
}

