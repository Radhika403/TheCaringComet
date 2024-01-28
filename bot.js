const q1 = "Mental health is a state of mental well-being that enables people to cope with stress. The need for action on mental health is indisputable and urgent.";
const q2 = "Don't be sad, cheer up. I am here to assist you";
const q2_ = "Practice deep breathing, exercise, prioritize tasks, set boundaries, seek support, and maintain perspective for effective stress management. This can make you feel better";
const q3 = "Try to deviate your mind into some positive things if you feel this way";
const q4 = "I'm really sorry to hear that you're feeling this way, but I can't provide the help that you need. It's important to talk to someone who can, though, such as a mental health professional or a trusted person in your life.";
const q5 = "Yes, a doctor's help can be a good option. Please go ahead on our website to book your appointment with our experts";
const q6 = "I know right, It's really important to have a good friend circle who always supports and motivates you to achieve your life goals";
const q7 = "I'm here to help! If you're comfortable, please share more details or specific concerns so I can provide more targeted assistance. If it's a serious or urgent matter, consider reaching out to a mental health professional or someone you trust.";
const q8 = "Good to see that you are happy today :)";
const q9 = "You can use the following resources: https://www.youtube.com/watch?v=PTAkiukJK7E.\nYou can also refer to the following videos - https://www.youtube.com/watch?v=CNkiPN_WZfA";
const q10 = "Why don't scientists trust atoms?\nBecause they make up everything!";
const q11 = "Emotional Assistance de sakta hu aapko but abhi Tejaswi Didi fir se banayengi mujhe tabh batata hu lol"; // Hindi text, may need translation or handling
const q12 = "Yes, you can use '/reminder' to set a reminder for the appointment";
const q13 = "Sure, to check your registration details head to /registration -> /confirm.";
const q14 = "What makes you sad? Is it the workload? or something else that troubles you dear?";
const q15 = "I am a bot that will help you in your lows and keep your spirit up <3";
const q15_ = "I am a bot that will help you in your lows and keep your spirit up <3";
const q16 = "You can head to the --Book your appointment now!-- to get a personalized slot booked for you";
const q17 = "Sure, you can use the '/contact' for getting the contact details of our organizers.";
const q17_ = "Sure, you can use the '/contact' for getting the contact details of our expert doctors";
const q18 = "Tried watching Sadhguru meditative videos??? They actually make you feel comfortable.";
const q19 = "I am here to help you manage your mental health.... <3";
const q20 = "Yes, I'll be happy to answer that :)";

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
    response('I am Sylvie-the bot! I am here to guide you through this journey', ['who', 'are', 'you'], true, ['who', 'are', 'you']);
    // Longer responses
    response(q1, ['what', 'mental', 'health'], true, ['mental', 'health']);
    response(q2, ['I', 'sad'], true, ['sad']);
    response(q2_, ['stress'], true, ['stress']);
    response(q3, ['family'], true, ['family']);
    response(q4, ['suicide'], true, ['suicide']);
    response(q5, ['doctor'], true, ['doctor']);
    response(q6, ['friends'], true, ['friends']);
    response(q7, ['help', 'me'], true, ['help']);
    response(q8, ['happy'], true, ['happy']);
    response(q9, ['prepare', 'resources', 'resource', 'material'], true, ['resources']);
    response(q10, ['joke'], true, ['joke']);
    response(q11, ['assistance'], true, ['assistance']);
    response(q12, ['set', 'give', 'reminders'], true, ['reminder', 'set']);
    response(q13, ['confirm', 'registration'], true, ['confirm', 'registration']);
    response(q14, ['depressed'], true, ['depressed']);
    response(q15, ['what', 'bot'], true, ['what', 'bot']);
    response(q16, ['how', 'book', 'appointment'], true, ['appointment']);
    response(q17, ['talk', 'organizer', 'coordinator', 'contact'], true, ['talk']);
    response(q17_, ['talk', 'contact'], true, ['contact']);
    response(q18, ['provide', 'resources'], true, ['resources']);
    response(q19, ['what', 'for', 'me'], true, ['what', 'for', 'me']);
    response(q20, ['ask', 'question'], true, ['ask', 'question']);

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