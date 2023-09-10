const express = require('express');
const languages = express.Router();
const Language = require('../models/language.js');

module.exports = languages;

languages.get('/seed', (req, res) => {
    Language.insertMany([
        {
            "name": "english",
            "greeting": "Hello world",
            "pangram": "The quick brown fox jumps over the lazy dog",
            "filler": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            "name": "spanish",
            "greeting": "Hola mundo",
            "pangram": "Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú"
        },
        {
            "name": "korean",
            "greeting": "안녕하세요",
            "pangram": "가장 먼저, 나는 먹고 싶어요."
        },
        {
            "name": "swedish",
            "greeting": "Hej världen",
            "filler": "Löksås ipsum äng miljoner både varit inom äng mjuka ordningens, vid sitt söka jäst ska stora miljoner ska vi varit, åker äng brunsås träutensilierna rännil precis tre där."
        },
        {
            "name": "hindi",
            "greeting": "नमस्ते दुनिया",
            "pangram": "ऋषिकेश बुलगी दौरहा कानीके बडे सपुने सर्वणग करनीके विभाग महाराष्ट्र भागय्य आपकि यक्षम जोड़कर उपराग काण्डर्प मकरध्वज नमनग्रहण"
        },
        {
            "name": "swahili",
            "greeting": "Salamu, dunia"
        }
    ])
    .then(createdLanguages => {
        res.json({
            message: "Seed successful!"
        });
    })
});

// Index:
languages.get('/', (req, res) => {
    Language.find()
    .then(foundLanguages => {
        res.json(foundLanguages);
    })
});

// Show:
languages.get('/:name', (req, res) => {
    const languageName = req.params.name.toLowerCase();
    Language.findOne({ name: languageName })
    .then(foundLanguage => {
        res.json(foundLanguage);
    })
});
