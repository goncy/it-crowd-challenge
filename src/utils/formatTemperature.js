function toCelsius(temperature) {
  return `${(temperature - 273.15).toFixed(2)}° C`;
}

function toFarenheit(temperature) {
  return `${((9 / 5) * (temperature - 273) + 32).toFixed(2)}° F`;
}

function toKelvin(temperature) {
  return `${temperature.toFixed(2)}° K`;
}

export default function formatTemperature(temperature, format) {
  switch (format) {
    case "celsius":
      return toCelsius(temperature);
    case "farenheit":
      return toFarenheit(temperature);
    default:
      return toKelvin(temperature);
  }
}
