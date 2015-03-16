function vRaptorSerialize(object, objName, separador) {
	var param = '';
	separador = separador || '';
	for (var key in object) {
		if (object.hasOwnProperty(key)) {
			if (object[key] && object[key].constructor === Array) {
				for (var i = 0; i < object[key].length; ++i) {
					param += vRaptorSerialize(object[key][i], objName + "." + key + "[" + i + "]", '&');
				}
			}
			else if (object[key] && object[key].constructor === Object) {
				param += vRaptorSerialize(object[key], objName + "." + key, '&');
			}
			else {
				param += separador + objName + '.' + key + "=" + object[key];
			}
			separador = '&';
		}
	}
	return param;
}