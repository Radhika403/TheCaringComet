import random
#pip install langid
#pip install -U deep-translator
# information types question

q1 = "Mental health is a state of mental well-being that enables people to cope with stress. The need for action on mental health is indisputable and urgent."
q2="Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities."
q3= "Anxiety is a normal emotion that causes increased alertness, fear, and physical signs, such as a rapid heart rate."
q4="Common symptoms of depression include low mood, loss of interest or pleasure, changes in appetite or weight, sleep disturbances, fatigue, and difficulty concentrating."
q5= "Common symptoms of anxiety include excessive worrying, restlessness, muscle tension, irritability, sleep disturbances, and difficulty concentrating."
q6="While stress is a normal response to challenges, an anxiety disorder involves excessive and prolonged worry that can interfere with daily life. "
q7="Mindfulness is a practice that involves being fully present and engaged in the current moment."
q8="Therapy is a process where individuals talk with a trained professional to address emotional, behavioral, or psychological challenges"
q9="Its majorly of 4 types : Cognitive-Behavioral Therapy (CBT), Psychodynamic Therapy, Humanistic Therapy and Interpersonal Therapy."
q10="Social anxiety is an intense fear of social situations and interactions."
q11=" Relaxation methods include deep breathing, progressive muscle relaxation, guided imagery, and mindfulness meditation"
q12="It improves interpersonal relationships and communication skills to alleviate symptoms."

#  emotional expressions words

q13 = "Dont be sad, cheer up. I am here to assist you"
q14 = "Good to see that you are happy today :)"
q15= "What makes you feel anxious ? Is it the work load  or something else that troubles you dear ?"
q16 ="Try to deviate your mind into some positive things if you feel this way."
q16_ ="Try to deviate your mind into some positive things if you feel this way."
q17="I hear you. Let's try a quick mindfulness exercise together. Take a deep breath in, hold it for a moment, and then exhale slowly. Repeat a few times. "
q18="I'm really sorry to hear that you're feeling this way.If you need help, I'm here."
q17_="I hear you. Let's try a quick mindfulness exercise together. Take a deep breath in, hold it for a moment, and then exhale slowly. Repeat a few times. "
q18_="I'm really sorry to hear that you're feeling this way.If you need help, I'm here."
q19="Consider spending more time with people who encourage and respect your choices. Positive influences can help you stay true to yourself."
q20="Reflect on past achievements. You've overcome challenges before – you can do it again"
q21="Would you like to talk more about what's been on your mind? Sometimes expressing your thoughts can make a big difference."


# Promoting website

q22="Yes, a doctor's help can be a good option. Please go ahead on our website to book your appointment with our experts"
q23="I appreciate your proactive approach,to get a personalized mental health report, I recommend taking our psychometric test  "
q24="I appreciate your proactive approach,to get a personalized mental health report, I recommend taking our psychometric test  "
q25="Yep, we've got self-help covered. Visit Resources section for more interactive resources! "
q26="Gotcha! Give our Resources section a spin for some tried-and-true mental wellness hacks."
q27="In that case have you ever tried our Resources section? It's like a cool treasure of mental wellness strategies waiting to be discovered."
q28="Sure! Explore our Resources section to learn from real experiences!"
# Chit chat
q29 = "Yes, I'll be happy to assist you :)"
q30 = "Why don't scientists trust atoms?/n Because they make up everything!"

# misc questions
q31="Take a deep breath in, hold for a moment, and exhale slowly. Repeat a few times. It's like a mini-vacation for your mind! "
q32=" Totally get it! Break up with screens before bed and try some bedtime deep breaths or gentle stretches."
q33="Try starting each day by reflecting on three things you're grateful for."

q34=" Fresh air + a change of scenery = instant stress relief!"
q35=" If you or someone you know needs immediate support, reach out to the mental health helpline at 123-456-78. They're here to help, 24/7."
q36="It's a rare skill, really – not everyone can be as stupidly talented as I am!"
q37="Thanks! Just trying to keep up with the smart people like you."


def unknown():
    response = ["Could you please re-phrase that? ",
                "Hmm I'll work on understanding this, But till then please rephrase it :)",
                "I think you have misspelled it dear",
                "What does that mean?","Sorry! I am unable to understand it"][
        random.randrange(5)]
    return response

import re

def message_probability(user_message, recognised_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    # Counts how many words are present in each predefined message
    for word in user_message:
        if word in recognised_words:
            message_certainty += 1

    # Calculates the percent of recognised words in a user message
    percentage = float(message_certainty) / float(len(recognised_words))

    # Checks that the required words are in the string
    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    # Must either have the required words, or be a single response
    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}

    # Simplifies response creation / adds it to the dict
    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(message, list_of_words, single_response, required_words)

    # Responses -------------------------------------------------------------------------------------------------------
    response('Hello!', ['hello', 'hi', 'hey', 'sup', 'heyo', 'greetings'], single_response=True)
    response('See you!', ['bye', 'goodbye'], single_response=True)
    response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], required_words=['how','are','you'])
    response('You\'re welcome!', ['thank', 'thanks','thankyou'], single_response=True)
    response('Thank you!', ['i', 'love', 'you'], required_words=['love', 'you'])
    response('Great to hear!',['fine','good','doing','well'],single_response = True)
    response('I am Comet-the bot! I have got resources, coping techniques, and a listening ear. Feel free to ask for advice or share your feelings! 🌈 ',['who','are','you'],required_words = ['who','are','you'])
    # Longer responses
    response(q1, ['what','mental','health'],required_words= ['mental','health'] )
    response(q2, ['what','depression'],required_words= ['depression'] )
    response(q3, ['what','anxiety'],required_words= ['anxiety'] )
    response(q4, ['what','symptoms','signs','depression'],required_words= ['depression'] )
    response(q5, ['what','symptoms','sign'],required_words= ['anxiety'] )
    response(q6, ['difference','differentiate','stress','anxiety'],required_words= ['anxiety','stress'] )
    response(q7, ['what','mindfulness'],required_words= ['what','mindfulness'] )
    response(q8, ['what','therapy'],required_words= ['what','therapy'] )
    response(q9, ['what','types','therapy'],required_words= ['type','therapy'] )
    response(q10, ['social','anxiety'],required_words= ['social','anxiety'] )
    response(q11, ['relaxation','methods','techniques'],required_words= ['relaxation'] )
    response(q12, ['what','interpersonal','therapy'],required_words= ['social','anxiety'] )





    response(q13,['I','feel','sad'],required_words = ['sad'])
    response(q14,['happy'],required_words = ['happy'])
    response(q15,['anxiety'],required_words = ['anxiety'])
    response(q16,['stress'],required_words = ['stress'])
    response(q16,['low'],required_words = ['low'])
    response(q17,['frustrated'],required_words = ['frustrated'])
    response(q17_,['angry'],required_words = ['angry'])
    response(q18,['feel','suicide',],required_words = ['suicide'])
    response(q18_,['feel','depressed'],required_words = ['depressed'])
    response(q19,['feel','peer','pressure'],required_words = ['peer','pressure'])
    response(q20,['feel','demotivated'],required_words = ['demotivated'])
    response(q21,['feel','confused'],required_words = ['confused'])


    response(q22,['doctor'],required_words = ['doctor'])
    response(q23,['mental','report'],required_words = ['report'])
    response(q24,['mental','wellness','test'],required_words = ['test'])
    response(q25,['self','help','resources'],required_words = ['self','help','resources'])
    response(q26,['tips',],required_words = ['tips'])
    response(q27,['strategy'],required_words = ['strategy'])
    response(q28,['experience'],required_words = ['experience'])
    response(q29,['help'],required_words = ['help'])
    response(q29,['answer'],required_words = ['answer'])
    response(q30,['joke'],required_words = ['joke'])
    response(q31,['relaxation','techniques'],required_words = ['relaxation','techniques'])
    response(q32,['manage','sleep','cycle'],required_words = ['manage','sleep','cycle'])
    response(q33,['build','positive','mindset'],required_words = ['build','positive','mindset'])
    response(q34,['manage','stress'],required_words = ['manage','stress'])
    response(q35,['helplines','emergency'],required_words = ['helplines','emergency'])
    response(q36,['you','are','stupid'],required_words = ['you','are','stupid'])
    response(q37,['you','are','smart'],required_words = ['you','are','smart'])



    best_match = max(highest_prob_list, key=highest_prob_list.get)
    # print(highest_prob_list)
    # print(f'Best match = {best_match} | Score: {highest_prob_list[best_match]}')

    return unknown() if highest_prob_list[best_match] < 1 else best_match

from deep_translator import GoogleTranslator
import langid

def get_response(user_input):
  detected_language, _ = langid.classify(user_input)
  engtext = GoogleTranslator(source = detected_language, target='en').translate(user_input)

  split_message = re.split(r'\s+|[,;?!.-]\s*', engtext.lower())

  response = check_all_messages(split_message)

  # Translate back to the detected language
  langtext = GoogleTranslator(source='en', target=detected_language).translate(response)
  return langtext
