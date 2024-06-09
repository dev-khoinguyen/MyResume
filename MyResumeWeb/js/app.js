var menu_close = document.querySelector('.menu-img');
var menu = document.querySelector('.menu');
menu_close.addEventListener("click", function () {
    menu.classList.toggle('show');
});

var form = document.getElementById('form');
var message = document.getElementById('message');
var message_firstname = document.getElementById('message-firstname');
var message_lastname = document.getElementById('message-lastname');
var message_email = document.getElementById('message-email');
var message_phone = document.getElementById('message-phone');
var message_interest = document.getElementById('message-interest');
var message_comment = document.getElementById('message-comment');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    message.innerText = '';
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var interests = document.querySelectorAll('input[name="interest"]:checked');
    var comment = document.getElementById('comment').value.trim();
    var count = 0;
    if (firstname === '') {
        showMessage(message_firstname, 'Firstname is required');
    } else {
        if (firstname.length < 3 || firstname.length > 30) {
            showMessage(message_firstname, 'Firstname should have at least 3 characters and should not exceed 30 characters.');
        } else {
            message_firstname.innerText = '';
            count++;
        }
    }
    if (lastname === '') {
        showMessage(message_lastname, 'Last name is required');
    } else {
        if (lastname.length < 3 || lastname.length > 30) {
            showMessage(message_lastname, 'Lastname should have at least 3 characters and should not exceed 30 characters.');
        } else {
            message_lastname.innerText = '';
            count++;
        }
    }
    if (!validateEmail(email)) {
        showMessage(message_email, 'Please enter a valid email.');
    } else {
        count++;
        message_email.innerText = '';
    }

    if (!validatePhoneNumber(phone)) {
        showMessage(message_phone, 'Please enter a valid phone number (10 digits with no comma or spaces).');
    } else {
        message_phone.innerText = '';
        count++;
    }

    if (interests.length === 0) {
        showMessage(message_interest, 'Please select at least one interest.');
    } else {
        message_interest.innerText = '';
        count++;
    }

    if (comment === '' || comment.length < 20) {
        showMessage(message_comment, 'Comment cannot be blank and should have at least 20 characters.');
    } else {
        message_comment.innerText = '';
        count++;
    }
    if (count === 6) {
        showMessage(message, 'Form submitted successfully!', false);
    }
});

function validateEmail(email) {
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function showMessage(message_direction, msg, isError = true) {
    message_direction.textContent = msg;
    message_direction.style.color = isError ? 'red' : 'green';
}