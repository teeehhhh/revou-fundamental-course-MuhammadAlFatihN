document
  .getElementById("temperatureForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var temperature = parseFloat(document.getElementById("temperature").value);
    var scale = document.getElementById("scale").value;
    var result;

    if (isNaN(temperature)) {
      result = "Silakan masukkan angka yang valid.";
    } else {
      switch (scale) {
        case "CtoF":
          result = (temperature * 9) / 5 + 32;
          result = `${temperature}°C sama dengan ${result.toFixed(2)}°F`;
          break;
        case "FtoC":
          result = ((temperature - 32) * 5) / 9;
          result = `${temperature}°F sama dengan ${result.toFixed(2)}°C`;
          break;
        case "CtoK":
          result = temperature + 273.15;
          result = `${temperature}°C sama dengan ${result.toFixed(2)}K`;
          break;
        case "KtoC":
          result = temperature - 273.15;
          result = `${temperature}K sama dengan ${result.toFixed(2)}°C`;
          break;
        case "FtoK":
          result = ((temperature - 32) * 5) / 9 + 273.15;
          result = `${temperature}°F sama dengan ${result.toFixed(2)}K`;
          break;
        case "KtoF":
          result = ((temperature - 273.15) * 9) / 5 + 32;
          result = `${temperature}K sama dengan ${result.toFixed(2)}°F`;
          break;
        default:
          result = "Pilihan konversi tidak valid.";
          break;
      }
    }

    document.getElementById("result").innerText = result;
  });
