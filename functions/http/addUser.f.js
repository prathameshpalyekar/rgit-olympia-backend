const functions = require('firebase-functions');
const firebase = require('firebase');
firebase.initializeApp(functions.config().firebase);
var database = firebase.database();

exports = module.exports = functions.https.onRequest((request, response) => {
    const { name, email, phoneNumber, gender, ageGroup, txnid, id } = request.body;

    firebase.database().ref('users/' + id).set({
        name,
        email,
        phoneNumber,
        gender,
        ageGroup,
        txnid,
        id,
        addedon: new Date(),
        verified: false
    }).then((results) => {
        response.send({success: true});
    }).catch((err) => {
        response.status(500).send(err);
    });
});