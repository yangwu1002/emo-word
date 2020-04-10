 // Simple study demonstrating the use of a tablet-designed webpage.
// Study is designed using simple JS/HTML/CSS, with data saves to a server
// controlled by call to a short php script. 


//TODO
//Buy images
//Add gray background to sad images and happy_child2, resize them
//Add an ending slide

// Overview: (i) Parameters (ii) Helper Functions (iii) Control Flow

// ---------------- PARAMETERS ------------------
var numTrials = 24;

//amount of white space between trials
var normalpause = 1500;

//pause after picture chosen, to display red border around picture selected
var timeafterClick = 1000;

//length of filler (every time fill2 comes up, add 1sec of time)
var fillerpause = 5000;

// ---------------- HELPER ------------------

function Trial(){
    var targetWord;
    var distractorWord;
    var targetColor;
    var firstImage;
    var secondImage;
    var trialNumber;
}

function getRandomImage(array){
    var chooser = getRandomInt(0, array.length - 1);
    var image = array[chooser];
    array = array.splice(array.indexOf(image), 1);
    return image;
}

// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}

//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

getCurrentDate = function() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	return (month + "/" + day + "/" + year);
}

//gets a random integer with a min and a max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//currently not called; could be useful for reaction time?
getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) minutes = "0" + minutes;
	return (hours + ":" + minutes);
}

////returns the word array; in the below order for list 1 and reversed for list 2
makeWordList = function(order) {
    var wordList = ["dog", "cookie", "car", "dax", "frog", "fill1", "lion", "modi", "apple",
                    "train", "toma", "fill2", "pifo", "cup", "kreeb", "cat", "monkey", "fill3",
                    "dofa", "fep", "carrot", "shovel", "hammer", "fill4", "wug", "shoe", "horse", "bottle"];
if (order === 2) {
        wordList.reverse();
    }
    return wordList;
}

makeTrialOrder = function(){
    var tHappy_dSad_right = new Trial;
    tHappy_dSad_right.targetWord = "happy";
    tHappy_dSad_right.distractorWord = "sad";
    tHappy_dSad_right.targetColor = "blue";
    tHappy_dSad_right.firstImage = getRandomImage(sadImages);
    tHappy_dSad_right.secondImage = getRandomImage(happyImages);
    var tHappy_dScared_right = new Trial;
    tHappy_dScared_right.targetWord = "happy";
    tHappy_dScared_right.distractorWord = "scared";
    tHappy_dScared_right.targetColor = "blue";
    tHappy_dScared_right.firstImage = getRandomImage(scaredImages);
    tHappy_dScared_right.secondImage = getRandomImage(happyImages);
    var tHappy_dAngry_right = new Trial;
    tHappy_dAngry_right.targetWord = "happy";
    tHappy_dAngry_right.distractorWord = "angry";
    tHappy_dAngry_right.targetColor = "blue";
    tHappy_dAngry_right.firstImage = getRandomImage(angryImages);
    tHappy_dAngry_right.secondImage = getRandomImage(happyImages);
    var tHappy_dSad_left = new Trial;
    tHappy_dSad_left.targetWord = "happy";
    tHappy_dSad_left.distractorWord = "sad";
    tHappy_dSad_left.targetColor = "brown";
    tHappy_dSad_left.firstImage = getRandomImage(happyImages);
    tHappy_dSad_left.secondImage = getRandomImage(sadImages);
    var tHappy_dScared_left = new Trial;
    tHappy_dScared_left.targetWord = "happy";
    tHappy_dScared_left.distractorWord = "scared";
    tHappy_dScared_left.targetColor = "brown";
    tHappy_dScared_left.firstImage = getRandomImage(happyImages);
    tHappy_dScared_left.secondImage = getRandomImage(scaredImages);
    var tHappy_dAngry_left = new Trial;
    tHappy_dAngry_left.targetWord = "happy";
    tHappy_dAngry_left.distractorWord = "angry";
    tHappy_dAngry_left.targetColor = "brown";
    tHappy_dAngry_left.firstImage = getRandomImage(happyImages);
    tHappy_dAngry_left.secondImage = getRandomImage(angryImages);
    var tSad_dHappy_right = new Trial;
    tSad_dHappy_right.targetWord = "sad";
    tSad_dHappy_right.distractorWord = "happy";
    tSad_dHappy_right.targetColor = "blue";
    tSad_dHappy_right.firstImage = getRandomImage(happyImages);
    tSad_dHappy_right.secondImage = getRandomImage(sadImages);
    var tSad_dHappy_left = new Trial;
    tSad_dHappy_left.targetWord = "sad";
    tSad_dHappy_left.distractorWord = "happy";
    tSad_dHappy_left.targetColor = "brown";
    tSad_dHappy_left.firstImage = getRandomImage(sadImages);
    tSad_dHappy_left.secondImage = getRandomImage(happyImages);
    var tScared_dHappy_right = new Trial;
    tScared_dHappy_right.targetWord = "scared";
    tScared_dHappy_right.distractorWord = "happy";
    tScared_dHappy_right.targetColor = "blue";
    tScared_dHappy_right.firstImage = getRandomImage(happyImages);
    tScared_dHappy_right.secondImage = getRandomImage(scaredImages);
    var tScared_dHappy_left = new Trial;
    tScared_dHappy_left.targetWord = "scared";
    tScared_dHappy_left.distractorWord = "happy";
    tScared_dHappy_left.targetColor = "brown";
    tScared_dHappy_left.firstImage = getRandomImage(scaredImages);
    tScared_dHappy_left.secondImage = getRandomImage(happyImages);
    var tAngry_dHappy_right = new Trial;
    tAngry_dHappy_right.targetWord = "angry";
    tAngry_dHappy_right.distractorWord = "happy";
    tAngry_dHappy_right.targetColor = "blue";
    tAngry_dHappy_right.firstImage = getRandomImage(happyImages);
    tAngry_dHappy_right.secondImage = getRandomImage(angryImages);
    var tAngry_dHappy_left = new Trial;
    tAngry_dHappy_left.targetWord = "angry";
    tAngry_dHappy_left.distractorWord = "happy";
    tAngry_dHappy_left.targetColor = "brown";
    tAngry_dHappy_left.firstImage = getRandomImage(angryImages);
    tAngry_dHappy_left.secondImage = getRandomImage(happyImages);
    var tSad_dScared_right = new Trial;
    tSad_dScared_right.targetWord = "sad";
    tSad_dScared_right.distractorWord = "scared";
    tSad_dScared_right.targetColor = "blue";
    tSad_dScared_right.firstImage = getRandomImage(scaredImages);
    tSad_dScared_right.secondImage = getRandomImage(sadImages);
    var tSad_dScared_left = new Trial;
    tSad_dScared_left.targetWord = "sad";
    tSad_dScared_left.distractorWord = "scared";
    tSad_dScared_left.targetColor = "brown";
    tSad_dScared_left.firstImage = getRandomImage(sadImages);
    tSad_dScared_left.secondImage = getRandomImage(scaredImages);
    var tScared_dSad_right = new Trial;
    tScared_dSad_right.targetWord = "scared";
    tScared_dSad_right.distractorWord = "sad";
    tScared_dSad_right.targetColor = "blue";
    tScared_dSad_right.firstImage = getRandomImage(sadImages);
    tScared_dSad_right.secondImage = getRandomImage(scaredImages);
    var tScared_dSad_left = new Trial;
    tScared_dSad_left.targetWord = "scared";
    tScared_dSad_left.distractorWord = "sad";
    tScared_dSad_left.targetColor = "brown";
    tScared_dSad_left.firstImage = getRandomImage(scaredImages);
    tScared_dSad_left.secondImage = getRandomImage(sadImages);
    var tSad_dAngry_right = new Trial;
    tSad_dAngry_right.targetWord = "sad";
    tSad_dAngry_right.distractorWord = "angry";
    tSad_dAngry_right.targetColor = "blue";
    tSad_dAngry_right.firstImage = getRandomImage(angryImages);
    tSad_dAngry_right.secondImage = getRandomImage(sadImages);
    var tSad_dAngry_left = new Trial;
    tSad_dAngry_left.targetWord = "sad";
    tSad_dAngry_left.distractorWord = "angry";
    tSad_dAngry_left.targetColor = "brown";
    tSad_dAngry_left.firstImage = getRandomImage(sadImages);
    tSad_dAngry_left.secondImage = getRandomImage(angryImages);
    var tAngry_dSad_right = new Trial;
    tAngry_dSad_right.targetWord = "angry";
    tAngry_dSad_right.distractorWord = "sad";
    tAngry_dSad_right.targetColor = "blue";
    tAngry_dSad_right.firstImage = getRandomImage(sadImages);
    tAngry_dSad_right.secondImage = getRandomImage(angryImages);
    var tAngry_dSad_left = new Trial;
    tAngry_dSad_left.targetWord = "angry";
    tAngry_dSad_left.distractorWord = "sad";
    tAngry_dSad_left.targetColor = "brown";
    tAngry_dSad_left.firstImage = getRandomImage(angryImages);
    tAngry_dSad_left.secondImage = getRandomImage(sadImages);
    var tAngry_dScared_right = new Trial;
    tAngry_dScared_right.targetWord = "angry";
    tAngry_dScared_right.distractorWord = "scared";
    tAngry_dScared_right.targetColor = "blue";
    tAngry_dScared_right.firstImage = getRandomImage(scaredImages);
    tAngry_dScared_right.secondImage = getRandomImage(angryImages);
    var tAngry_dScared_left = new Trial;
    tAngry_dScared_left.targetWord = "angry";
    tAngry_dScared_left.distractorWord = "scared";
    tAngry_dScared_left.targetColor = "brown";
    tAngry_dScared_left.firstImage = getRandomImage(angryImages);
    tAngry_dScared_left.secondImage = getRandomImage(scaredImages);
    var tScared_dAngry_right = new Trial;
    tScared_dAngry_right.targetWord = "scared";
    tScared_dAngry_right.distractorWord = "angry";
    tScared_dAngry_right.targetColor = "blue";
    tScared_dAngry_right.firstImage = getRandomImage(angryImages);
    tScared_dAngry_right.secondImage = getRandomImage(scaredImages);
    var tScared_dAngry_left = new Trial;
    tScared_dAngry_left.targetWord = "scared";
    tScared_dAngry_left.distractorWord = "angry";
    tScared_dAngry_left.targetColor = "brown";
    tScared_dAngry_left.firstImage = getRandomImage(scaredImages);
    tScared_dAngry_left.secondImage = getRandomImage(angryImages);
    var trialTypes = [tHappy_dSad_right, tHappy_dScared_right, tHappy_dAngry_right, tHappy_dSad_left, tHappy_dScared_left, tHappy_dAngry_left,
                  tSad_dHappy_right, tSad_dHappy_left, tScared_dHappy_right, tScared_dHappy_left, tAngry_dHappy_right, tAngry_dHappy_left,
                  tSad_dScared_right, tSad_dScared_left,tScared_dSad_right, tScared_dSad_left, tSad_dAngry_right, tSad_dAngry_left,
                  tAngry_dSad_right, tAngry_dSad_left, tAngry_dScared_right, tAngry_dScared_left, tScared_dAngry_right, tScared_dAngry_left];
    var trialOrder = shuffle(trialTypes);
    for (i = 1; i < trialOrder.length; i++){
        var t = trialOrder[i];
        t.trialNumber = i;
    }
    return trialOrder;
}

makeImageArray = function(trialOrder) {
    console.log(trialOrder);
    var imageArray = [];
    for (i = 0; i < trialOrder.length - 1; i ++){
        var t = trialOrder[i];
        imageArray.push(t.firstImage);
        imageArray.push(t.secondImage);
    }
    console.log(imageArray);
    return imageArray;
}

//CONTROL FLOW

//PRELOAD ALL IMAGES//---------------------------
var angryImages = ["angry1", "angry2", "angry3" , "angry4", "angry5", "angry6",
        "angry1", "angry2", "angry3" , "angry4", "angry5", "angry6"];
var angry = [];
for (i = 0; i < angryImages.length; i++){
    angry[i] = new Image();
    angry[i].src = "tabletobjects/" + angryImages[i] + ".jpg";
}
var happyImages = ["happy1", "happy2", "happy3" , "happy4", "happy5", "happy6",
        "happy1", "happy2", "happy3" , "happy4", "happy5", "happy6"];
var happy = [];
for (i = 0; i < happyImages.length; i++){
    happy[i] = new Image();
    happy[i].src = "tabletobjects/" + happyImages[i] + ".jpg";
}
var sadImages = ["sad1", "sad2", "sad3" , "sad4", "sad5", "sad6",
        "sad1", "sad2", "sad3" , "sad4", "sad5", "sad6"];
var sad = [];
for (i = 0; i < sadImages.length; i++){
    sad[i] = new Image();
    sad[i].src = "tabletobjects/" + sadImages[i] + ".jpg";
}
var scaredImages = ["scared1", "scared2", "scared3" , "scared4", "scared5", "scared6",
        "scared1", "scared2", "scared3" , "scared4", "scared5", "scared6"];
var scared = [];
for (i = 0; i < scaredImages.length; i++){
    scared[i] = new Image();
    scared[i].src = "tabletobjects/" + scaredImages[i] + ".jpg";
}
var allimages = angryImages.concat(happyImages, sadImages, scaredImages);
var images = angry.concat(scared, happy, sad);

//for dot game
var dots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", "x", "dot_smiley"];
for (i = 0; i<dots.length; i++) {
	images[i] = new Image();
	images[i].src = "dots/" + dots[i] + ".jpg";
}
//-----------------------------------------------


showSlide("instructions");

// MAIN EXPERIMENT
var experiment = {

	subid: "",
		//inputed at beginning of experiment
	trialnum: 0,
		//trial number
	order: 1,
		//whether child received list 1 or list 2
	word: "",
		//word that child is queried on
	pic1: "",
		//the name of the picture on the left
	pic2: "",
		//the name of the picture on the right
	pic1type: "",
		//whether the picture on the left is familiar or novel 
	pic2type: "",
		//whether the picture on the right is familiar or novel
	side: "",
		//whether the child picked the left (L) or the right (R) picture
	chosenpic: "",
		//the name of the picture the child picked
	response: "",
		//whether the response was the correct response (Y) or the incorrect response (N)
	trialtype: "",
		//whether the trial was a word recognition (rec) or mutual exclusivity (me) trial;
		// control (MEcontrol) or experimental (MEexperimental)
	date: getCurrentDate(),
		//the date of the experiment
	timestamp: getCurrentTime(),
		//the time that the trial was completed at 
	reactiontime: 0,
	//TODO : add reaction time variable ***** 

	preStudy: function() {
		document.body.style.background = "black";
		$("#prestudy").hide();
		setTimeout(function () {
			experiment.next();
		}, normalpause);
	},


	//Checks to see whether the experimenter inputted appropriate values before moving on with the experiment
	checkInput: function() {
		//subject ID
  		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}
  		experiment.subid = document.getElementById("subjectID").value;

		//list
//		if (document.getElementById("order").value !== "1" && document.getElementById("order").value !== "2") { //|| document.getElementById("order").value !== "2") {
//			$("#checkMessage").html('<font color="red">For list, you must choose either a 1 or 2</font>');
//			return;
//		}
//		experiment.order = parseInt(document.getElementById("order").value);
        $("#instructions").hide();
        experiment.preStudy(0);
	},

    //TODO: second training round!! (training on blue vs brown)

	//the end of the experiment, where the background becomes completely black
    end: function () {
    	setTimeout(function () {
    		$("#stage").fadeOut();
    	}, normalpause);
    	showSlide("finish");
    	document.body.style.background = "black";
    },

	//concatenates all experimental variables into a string which represents one "row" of data in the eventual csv, to live in the server
	processOneRow: function() {
		var dataforRound = experiment.subid; 
		dataforRound += "," + experiment.order + "," + experiment.trialnum + "," + experiment.word;
		dataforRound += "," + experiment.pic1 + "," + experiment.pic2 + "," + experiment.pic1type + "," + experiment.pic2type;
		dataforRound += "," + experiment.side + "," + experiment.chosenpic + "," + experiment.response + "," + experiment.trialtype;
		dataforRound += "," + experiment.date + "," + experiment.timestamp + "," + experiment.reactiontime + "\n";
		$.post("http://langcog.stanford.edu/cgi-bin/TABLET/tabletstudysave.php", {postresult_string : dataforRound});	
	},

	// MAIN DISPLAY FUNCTION
  	next: function() {

        //returns the list of all words to use in the study - list dependent
        var wordList = makeWordList(experiment.order);
        //returns the list of all images to use in the study - list dependent
        var trialOrder = makeTrialOrder();
        var imageArray = makeImageArray(trialOrder);
        var objects_html = "";
        var counter = 1;

        // Create the object table (tr=table row; td= table data)
        //objects_html = '<table class = "centered" ><tr><td id=word colspan="2">' + wordList[0] + '</td></tr><tr>';;

        //HTML for next button
        objects_html += '<center><button type="button" id = "Next" class = "next" onClick = "this.blur();"> Next </button> </center>';

        //HTML for the first object on the left
        leftname = "tabletobjects/" + imageArray[0] + ".jpg";
        objects_html += '<table align = "center" cellpadding="30"><tr></tr><tr><td align="center"><img class="pic" src="' + leftname +  '"alt="' + leftname + '" id= "leftPic"/></td>';

        //HTML for the first object on the right
        rightname = "tabletobjects/" + imageArray[1] + ".jpg";
        objects_html += '<td align="center"><img class="pic" src="' + rightname +  '"alt="' + rightname + '" id= "rightPic"/></td>';

        objects_html += '</tr></table>';
        $("#objects").html(objects_html);

        $("#stage").fadeIn();

        var startTime = (new Date()).getTime();

        console.log("TrialOrder in the experiment: " + trialOrder);
        console.log(trialOrder[0]);
        console.log("Target emotion: " + trialOrder[0].targetWord);
        console.log("Target color: " + trialOrder[0].targetColor);

        //click disable for the first slide
        var clickDisabled = true;
        setTimeout(function() {clickDisabled = false;}, (spriteData[wordList[0]].onset - spriteData[wordList[0]].start)*1000 + 300);

        $('.next').bind('click touchstart', function(event) {

            //if (clickDisabled) return;

            //disable subsequent clicks once the participant has made their choice
            clickDisabled = true;

            //time the participant clicked - the time the audio began - the amount of time between the beginning of the audio and the
            //onset of the word
            //experiment.reactiontime = (new Date()).getTime() - startTime - (spriteData[wordList[0]].onset-spriteData[wordList[0]].start)*1000;

            experiment.trialnum = counter;
            //experiment.word = wordList[0];
            experiment.pic1 = trialOrder[0].firstImage; //important!!
            experiment.pic2 = trialOrder[0].secondImage;

            //get whether the left and right pictures were familiar or novel
//            if (novelWords.indexOf(imageArray[0]) === -1) {
//                experiment.pic1type = "familiar";
//            } else {
//                experiment.pic1type = "novel";
//            }
//            if (novelWords.indexOf(imageArray[1]) === -1) {
//                experiment.pic2type = "familiar";
//            } else {
//                experiment.pic2type = "novel";
//            }

            //Was the picture clicked on the right or the left?
//            var picID = $(event.currentTarget).attr('id');
//            if (picID === "leftPic") {
//                experiment.side = "L";
//                experiment.chosenpic = imageArray[0];
//            } else {
//                experiment.side = "R";
//                experiment.chosenpic = imageArray[1];
//            }

            //If the child picked the picture that matched with the word, then they were correct. If they did not, they were not correct.
//            if (experiment.chosenpic === experiment.word) {
//                experiment.response = "Y";
//            } else {
//                experiment.response = "N"
//            }

            //what kind of trial was this?
            //experiment.trialtype = getTrialType(experiment.word, imageArray[0], imageArray[1]);

            //Add one to the counter and process the data to be saved; the child completed another "round" of the experiment
            experiment.processOneRow();
            counter++;

            //$(document.getElementById(picID)).css('margin', "-8px");
            //$(document.getElementById(picID)).css('border', "solid 8px red");

			//remove the pictures from the image array that have been used, and the word from the wordList that has been used
            trialOrder.splice(0, 1);
            imageArray.splice(0, 2);
			wordList.splice(0, 1);

		
			setTimeout(function() {
				$("#stage").fadeOut();

				//there are no more trials for the experiment to run
				if (counter === numTrials + 1) {
					experiment.end();
					return;
				}	

				var gap;
				//check to see if the next round is going to be a filler round; if so, display a filler
//				if (wordList[0].indexOf("fill") !== -1) {
//					experiment.displayFiller(wordList[0], counter);
//					//remove the filler word so that the next round features the next critical word (do not change the images array)
					
//					gap = fillerpause;

//					//boy filler is 1s longer
//					if (wordList[0] === "fill2") gap += 1000;

//					//another round has now passed, so increment the counter and remove the filler word from the list
//					wordList.splice(0, 1);
//					counter++;

//				} else {
                gap = 0;
        //}

				//move on to the next round after either the normal amount of time between critical rounds, or after 
				//the filler has occurred
				setTimeout(function() {			
                        document.getElementById("leftPic").src = "tabletobjects/" + imageArray[0] + ".jpg";
                        document.getElementById("rightPic").src = "tabletobjects/" + imageArray[1] + ".jpg";

						//to make word display visible (as an alternative to sound), uncomment just change background of display to white
						//document.getElementById("word").innerHTML = wordList[0];

                        //$(document.getElementById(picID)).css('border', "none");
                        //$(document.getElementById(picID)).css('margin', "0px");

						$("#stage").fadeIn();
                        console.log(trialOrder[0]);
                        console.log("Target emotion: " + trialOrder[0].targetWord);
                        console.log("Target color: " + trialOrder[0].targetColor);

						//reactivate clicks only after a little bit after the prompt's word
                        //setTimeout(function() {clickDisabled = false;}, (spriteData[wordList[0]].onset-spriteData[wordList[0]].start)*1000 + 300);

						startTime = (new Date()).getTime();
                        //playPrompt(wordList[0]);
				}, gap + normalpause);
			}, timeafterClick);
	    });
    },
}
		
