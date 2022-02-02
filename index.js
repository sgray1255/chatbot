let bot = new RiveScript();

const message_container = document.querySelector('.msg');
const form = document.querySelector('.actions');
const input = document.querySelector('.input');
const username = "local-user";

const brain = [
  './brain.rive'
];

bot.loadFile(brain).then(loading_done).catch(loading_error);

function loading_done() {

  bot.sortReplies();

}

function loading_error(error) {
  console.log("Error when loading files: " + error);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  myReply(input.value);
  input.value = '';
});


function botResponse(message) {
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function myReply(message) {
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';

  bot.reply(username, message).then(function (reply) {
    botResponse(reply);
  });
}