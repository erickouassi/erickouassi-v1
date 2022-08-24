/*! *****************************************************************************
Copyright (c) YORISI LLC.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


// greetings
var myDate = new Date();
    var hrs = myDate.getHours();
    let year = myDate.getFullYear();

var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
//
var intro_Msg;

    if (hrs < 12)
        intro_Msg = 'How are you?';
    else if (hrs >= 12 && hrs <= 17)
        intro_Msg = 'I hope you are having a great day.';
    else if (hrs >= 17 && hrs <= 24)
        intro_Msg = 'I hope your day has been great.';


//
var sign_off;

    if (hrs < 12)
        sign_off = 'Have a wonderful day,';
    else if (hrs >= 12 && hrs <= 17)
        sign_off = 'Enjoy the rest of your day,';
    else if (hrs >= 17 && hrs <= 24)
        sign_off = 'Have a good night 🛌🏼 💤,';
    
//


    let gText = `<strong>${greet}</strong>`;
    document.querySelector('#greetingApp').innerHTML = gText;

    let iMsg = `<span>${intro_Msg}<span>`;
    document.querySelector('#Intro_Msg').innerHTML = iMsg;

    let sMsg = `<sapn>${sign_off}<span>`;
    document.querySelector('#sign_off_Msg').innerHTML = sMsg;

    document.getElementById("currentYear").innerHTML = year;


    /*  
// <span id="greetingApp"></span>
// <span id="Intro_Msg"></span>
// <span id="sign_off_Msg"></span>
// <span id="currentYear"></span>
// <script src="greeting.js"></script>

    */