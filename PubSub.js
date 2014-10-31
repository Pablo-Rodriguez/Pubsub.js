
(function() {

	var counter = 0;

	var subpub = {};

	subpub.subscribe = function(topic, callback) {
		if(!subpub[topic]){
			subpub[topic] = [];
		}
		var token = {
			id: counter,
			callback: callback
		};
		subpub[topic].push(token);
		return counter++;
	};

	subpub.publish = function(topic, args) {

		if(!subpub[topic]){
			return false;
		}

		args.forEach(function (data) {
			subpub[topic].forEach(function (token) {
				token['callback'](topic, data);
			});
		});
	};

	subpub.unsubscribe = function(topic, id) {
		for(var i in subpub[topic]){
			if(subpub[topic][i]['id'] == id){
				subpub[topic].splice(i, 1);
			}
		}
	};

	window.subscribe   = subpub.subscribe;
	window.publish 	   = subpub.publish;
	window.unsubscribe = subpub.unsubscribe;
})();