function convert() {
	const inputEl = document.getElementById("inputValue");
	const inputUnit = document.getElementById("inputUnit").value;
	const outputUnit = document.getElementById("outputUnit").value;
	const resultEl = document.getElementById("result");

	// Aceptar coma como separador decimal (usuarios hispanohablantes)
	const raw = inputEl.value.trim();
	const normalized = raw.replace(',', '.');
	const inputValue = parseFloat(normalized);

	if (raw === "" || isNaN(inputValue)) {
		resultEl.innerText = "Introduce un número válido para convertir.";
		return;
	}

	// Mapa de unidades a metros (factor multiplicador)
	const toMeters = {
		metros: 1,
		kilometros: 1000,
		millas: 1609.34,
		pies: 0.3048
	};

	if (!toMeters[inputUnit] || !toMeters[outputUnit]) {
		resultEl.innerText = "Unidad no soportada.";
		return;
	}

	const valueInMeters = inputValue * toMeters[inputUnit];
	const outputValue = valueInMeters / toMeters[outputUnit];

	// Mostrar unidad más legible (opcional: mostrar el nombre tal cual)
	resultEl.innerText = "El resultado es " + outputValue.toFixed(2) + " " + outputUnit;
}