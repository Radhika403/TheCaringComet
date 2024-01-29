//informative queries
const q1 = "Mental health is a state of mental well-being that enables people to cope with stress. The need for action on mental health is indisputable and urgent.";
const q2 = "Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities.";
const q3 = "Anxiety is a normal emotion that causes increased alertness, fear, and physical signs, such as a rapid heart rate.";
const q4 = "Common symptoms of depression include low mood, loss of interest or pleasure, changes in appetite or weight, sleep disturbances, fatigue, and difficulty concentrating.";
const q5 = "Common symptoms of anxiety include excessive worrying, restlessness, muscle tension, irritability, sleep disturbances, and difficulty concentrating.";
const q6 = "While stress is a normal response to challenges, an anxiety disorder involves excessive and prolonged worry that can interfere with daily life. ";
const q7 = "Mindfulness is a practice that involves being fully present and engaged in the current moment.";
const q8 = "Therapy is a process where individuals talk with a trained professional to address emotional, behavioral, or psychological challenges";
const q9 = "Its majorly of 4 types : Cognitive-Behavioral Therapy (CBT), Psychodynamic Therapy, Humanistic Therapy and Interpersonal Therapy.";
const q10 = "Social anxiety is an intense fear of social situations and interactions.";
const q11 = " Relaxation methods include deep breathing, progressive muscle relaxation, guided imagery, and mindfulness meditation";
const q12 = "It improves interpersonal relationships and communication skills to alleviate symptoms.";

//emotional expressions words
const q13 = "Dont be sad, cheer up. I am here to assist you";
const q14 = "Good to see that you are happy today :)";
const q15 = "What makes you feel anxious ? Is it the work load  or something else that troubles you dear ?";
const q16 = "Try to deviate your mind into some positive things if you feel this way.";
const q16_ = "Try to deviate your mind into some positive things if you feel this way.";
const q17 = "I hear you. Let's try a quick mindfulness exercise together. Take a deep breath in, hold it for a moment, and then exhale slowly. Repeat a few times. ";
const q18 = "I'm really sorry to hear that you're feeling this way. If you need help, I'm here.";
const q17_ = "I hear you. Let's try a quick mindfulness exercise together. Take a deep breath in, hold it for a moment, and then exhale slowly. Repeat a few times. ";
const q18_ = "I'm really sorry to hear that you're feeling this way.If you need help, I'm here.";
const q19 = "Consider spending more time with people who encourage and respect your choices. Positive influences can help you stay true to yourself.";
const q20 = "Reflect on past achievements. You've overcome challenges before – you can do it again";
const q21 = "Would you like to talk more about what's been on your mind? Sometimes expressing your thoughts can make a big difference.";

//Promoting website

const q22 = "Yes, a doctor's help can be a good option. Please go ahead on our website to book your appointment with our experts";
const q23 = "I appreciate your proactive approach,to get a personalized mental health report, I recommend taking our psychometric test  ";
const q24 = "I appreciate your proactive approach,to get a personalized mental health report, I recommend taking our psychometric test  ";
const q25 = "Yep, we've got self-help covered. Visit Resources section for more interactive resources! ";
const q26 = "Gotcha! Give our Resources section a spin for some tried-and-true mental wellness hacks.";
const q27 = "In that case have you ever tried our Resources section? It's like a cool treasure of mental wellness strategies waiting to be discovered.";
const q28 = "Sure! Explore our Resources section to learn from real experiences!";
//Chit chat
const q29 = "Yes, I'll be happy to assist you :)";
const q30 = "Why don't scientists trust atoms?/n Because they make up everything!";

//misc questions
const q31 = "Take a deep breath in, hold for a moment, and exhale slowly. Repeat a few times. It's like a mini-vacation for your mind! ";
const q32 = " Totally get it! Break up with screens before bed and try some bedtime deep breaths or gentle stretches.";
const q33 = "Try starting each day by reflecting on three things you're grateful for.";

const q34 = " Fresh air + a change of scenery = instant stress relief!";
const q35 = " If you or someone you know needs immediate support, reach out to the mental health helpline at 123-456-78. They're here to help, 24/7.";
const q36 = "It's a rare skill, really..not everyone can be as stupidly talented as I am!";
const q37 = "Thanks! Just trying to keep up with the smart people like you.";

function unknown() {
    const responses = [
        "Could you please re-phrase that? ",
        "Hmm I'll work on understanding this, But till then please rephrase it :)",
        "I think you have misspelled it dear",
        "What does that mean?",
        "Sorry! I am unable to understand it"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function messageProbability(userMessage, recognisedWords, singleResponse = false, requiredWords = []) {
    let messageCertainty = 0;
    let hasRequiredWords = true;

    // Counts how many words are present in each predefined message
    let words = userMessage.split(" ")
    for (var i = 0; i < words.length; i += 1) {
        let word = words[i]
        if (recognisedWords.includes(word)) {
            messageCertainty += 1;
        }
    }

    // Calculates the percent of recognised words in a user message
    const percentage = messageCertainty / recognisedWords.length;
    // console.log(percentage)

    // Checks that the required words are in the string
    for (var i = 0; i < requiredWords.length; i += 1) {
        let word = requiredWords[i]
        if (!userMessage.includes(word)) {
            hasRequiredWords = false;
            break;
        }
    }

    // Must either have the required words, or be a single response
    if (hasRequiredWords || singleResponse) {
        return Math.floor(percentage * 100);
    } else {
        return 0;
    }
}

function checkAllMessages(message) {
    const highestProbList = {};

    // Simplifies response creation / adds it to the dict
    function response(botResponse, listOfWords, singleResponse = false, requiredWords = []) {
        highestProbList[botResponse] = messageProbability(message, listOfWords, singleResponse, requiredWords);
    }

    // Responses -------------------------------------------------------------------------------------------------------
    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo', 'greetings'], true);
    response('See you!', ['bye', 'goodbye'], true);
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], true, ['how', 'are', 'you']);
    response('You\'re welcome!', ['thank', 'thanks', 'thankyou'], true);
    response('Thank you!', ['i', 'love', 'you'], false, ['love', 'you']);
    response('Great to hear!', ['fine', 'good', 'doing', 'well'], true);
    response('I am Comet-the bot! I have got resources, coping techniques, and a listening ear. Feel free to ask for advice or share your feelings! 🌈 ', ['who', 'are', 'you'], true, ['who', 'are', 'you']);

    // Longer responses
    response(q1, ['what', 'mental', 'health'], true, ['mental', 'health'])
    response(q2, ['what', 'depression'], true, ['depression'])
    response(q3, ['what', 'anxiety'], true, ['anxiety'])
    response(q4, ['what', 'symptoms', 'signs', 'depression'], true, ['depression'])
    response(q5, ['what', 'symptoms', 'sign'], true, ['anxiety'])
    response(q6, ['difference', 'differentiate', 'stress', 'anxiety'], true, ['anxiety', 'stress'])
    response(q7, ['what', 'mindfulness'], true, ['what', 'mindfulness'])
    response(q8, ['what', 'therapy'], true, ['what', 'therapy'])
    response(q9, ['what', 'types', 'therapy'], true, ['type', 'therapy'])
    response(q10, ['social', 'anxiety'], true, ['social', 'anxiety'])
    response(q11, ['relaxation', 'methods', 'techniques'], true, ['relaxation'])
    response(q12, ['what', 'interpersonal', 'therapy'], true, ['social', 'anxiety'])


    response(q13, ['I', 'feel', 'sad'], true, ['sad'])
    response(q14, ['happy'], true, ['happy'])
    response(q15, ['anxiety'], true, ['anxiety'])
    response(q16, ['stress'], true, ['stress'])
    response(q16, ['low'], true, ['low'])
    response(q17, ['frustrated'], true, ['frustrated'])
    response(q17_, ['angry'], true, ['angry'])
    response(q18, ['feel', 'suicide'], true, ['suicide'])
    response(q18_, ['depressed'], true, ['depressed'])
    response(q18_, ['feel', 'die'], true, ['die'])
    response(q19, ['feel', 'peer', 'pressure'], true, ['peer', 'pressure'])
    response(q20, ['feel', 'demotivated'], true, ['demotivated'])
    response(q21, ['feel', 'confused'], true, ['confused'])


    response(q22, ['doctor'], true, ['doctor'])
    response(q23, ['mental', 'report'], true, ['report'])
    response(q24, ['mental', 'wellness', 'test'], true, ['test'])
    response(q25, ['self', 'help', 'resources'], true, ['self', 'help', 'resources'])
    response(q26, ['tips',], true, ['tips'])
    response(q27, ['strategy'], true, ['strategy'])
    response(q28, ['experience'], true, ['experience'])
    response(q29, ['help'], true, ['help'])
    response(q29, ['answer'], true, ['answer'])
    response(q30, ['joke'], true, ['joke'])
    response(q31, ['relaxation', 'techniques'], true, ['relaxation', 'techniques'])
    response(q32, ['manage', 'sleep', 'cycle'], true, ['manage', 'sleep', 'cycle'])
    response(q33, ['build', 'positive', 'mindset'], true, ['build', 'positive', 'mindset'])
    response(q34, ['manage', 'stress'], true, ['manage', 'stress'])
    response(q35, ['helplines', 'emergency'], true, ['helplines', 'emergency'])
    response(q36, ['you', 'are', 'stupid'], true, ['you', 'are', 'stupid'])
    response(q37, ['you', 'are', 'smart'], true, ['you', 'are', 'smart'])


    const bestMatch = Object.keys(highestProbList).reduce((a, b) => highestProbList[a] > highestProbList[b] ? a : b);
    return highestProbList[bestMatch] < 1 ? unknown() : bestMatch;
}

// Used to get the response
function getResponse(userInput) {
    console.log(userInput)
    const splitMessage = userInput.toLowerCase();
    const response = checkAllMessages(splitMessage);
    console.log(response);
    return response;
}