var weapons = {
	'Gunlance': {
		powerFactor:2.3
		,moves:{
			"Charge Thrust": 0.32
			,"Swing Up": 0.28
			,"High Thrust": 0.18
			,"Thrust": 0.24
			,"Slam": .40
			,"Jump Slam": 0.34
			,"Jump Thrust": 0.19

		}
	}/*
	,'Bow': {
		powerFactor:1.2
	}
	,'Heavy Bowgun': {
		powerFactor: 1.5
	}
	,'Light Bowgun': {
		powerFactor: 2.3
	}
	,'Great Sword': {
		powerFactor: 4.8
	}
	,'Long Sword': {
		powerFactor: 3.3
	}
	,'Sword': {
		powerFactor: 1.4
	}
	,'Dual Blades': {
		powerFactor: 1.4
	}
	,'Hammer': {
		powerFactor: 5.2
	}
	,'Hunting Horn': {
		powerFactor: 5.2
	}
	,'Lance': {
		powerFactor: 2.3
	}
	,'Switch Axe': {
		powerFactor: 5.4
	}
	,'Charge Blade': {
		powerFactor: 3.6
	}*/
	,'Insect Glaive': {
		powerFactor: 3.1
		,moves:{
			"Draw": 0.28
			,"Jump Smack": 0.28
			,"Backward Swipe": 0.26
			,"Lunge": 0.30
			,"Poke": 0.15
			,"Upward Twirl 1": 0.26
			,"Upward Twirl 2": 0.20
			,"Twirl followup A": 0.24
			,"Twirl followup B1": 0.18
			,"Twirl followup B2": 0.24
			,"Backflip": 0.20
			,"Jump": 0.20
			,"R Draw": 0.28
			,"R Jump Smack": 0.28
			,"R Backward Swipe 1": 0.18
			,"R Backward Swipe 2": 0.30
			,"R Connector": 0.28
			,"R Lunge 1": 0.24
			,"R Lunge 2": 0.38
			,"R Poke 1": 0.18
			,"R Poke 2": 0.12
			,"R Upward Twirl 1": 0.28
			,"R Upward Twirl 2": 0.16
			,"R Upward Twirl 3": 0.18
			,"R Twirl followup A1": 0.26
			,"R Twirl followup A2": 0.16
			,"R Twirl followup B1": 0.16
			,"R Twirl followup B2": 0.14
			,"R Twirl followup B3": 0.28
			,"R Backflip": 0.20
			,"R Jump 1": 0.20
			,"R Jump 2": 0.10
		}
	}
}

var wdCalc = {
	wpnSelect: function(wpn){
		var moves = weapons[wpn].moves;
		var wpnList = weaponList[wpn];
		$("#mov, #wpnName").empty().append("<option>");
		for(mv in moves){
			$("<option>").val(moves[mv]).text(mv+" ("+parseInt(moves[mv]*100)+")").appendTo("#mov");
		}
		for(var i=0;i<wpnList.length;i++){
			var wpn = wpnList[i];
			$("<option>").val(wpn.attack).text(wpn.local_name).appendTo("#wpnName");
		}
	}
	,power: function(raw){
		wpn = $("#wpn").val();
		$("#pwr").val(parseInt(raw / weapons[wpn].powerFactor));
	}
	,damage: function(){
		$("#dmg").val(parseInt($("#pwr").val() * $("#mov").val() * ($("#eff").val()/100))); //Power*MotionValue*Effective
	}
}

$(document).ready(function(){
	for(wpn in weapons){
		$("<option>").text(wpn).appendTo("#wpn");
	}
});