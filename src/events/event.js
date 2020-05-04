class Event {
	constructor(type, src, data) {
		this.type = type;
		this.src = src;
		const me = this;
		if (data != null) {
			Object.keys(data).forEach(function (key) {
				if (!me.hasOwnProperty(key)) {
					me[key] = data[key];
				}
			});
		}
	}
}

export default Event;