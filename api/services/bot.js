var telegrambot=require('node-telegram-bot-api');
var token='240684202:ViaAL75aAnwu6kmMQ2hyyrufbtTFLNOrSzc';
var bot=new telegrambot(
	token, {
		polling: true
	});

bot.getMe().then(function(me){
	console.log('hola mi nombre es:'+ me.username);
});


bot.onText(/^\/mi nombre (.+)$/, function(msg, match){
	var name=match[1];
	console.log(msg);
	bot.sendMessage(msg.chat.id, `Hola ${name} bienvenido a este bot, con mucho estrés salio este trabajo jaja, no la verdad si.
	los comandos a utilizar para que navegues en mi bot son los siguientes:
	*/imagen enamora :Es para recibir la imágen
	*/song devotion :Es para recibir la canción
	*/ubicacion :Es para obtener la ubicación de un lugar en especifico, en este 
	caso se obtendrá la ubicación del zoologico `).then(function(){
		console.log(`saludando a ${name}`);
	});
});


bot.onText(/\/imagen/, function(msg){

	console.log(msg);
     photo='./assets/images/enamora.jpg';
bot.sendPhoto(msg.chat.id, photo).then(function(){
		console.log(`enviando imagen`);
	});	
});



bot.onText(/\/song/, function(msg){

	console.log(msg);
     audio='./assets/devotion.mp3';
bot.sendAudio(msg.chat.id, audio).then(function(){
		console.log(`enviando audio`);
	});	
});


bot.onText(/\/ubicacion/, function(msg){

	console.log(msg);
      latitud=-98.3603493;
      longitud=20.080373;  
bot.senLocation(msg.chat.id,latitud,longitud).then(function(){
		console.log(`enviando ubicación`);
	});	
});

