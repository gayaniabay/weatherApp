// urls
const api = "http://api.openweathermap.org/";
const apiKey = "a96b9faed450f23f316a8aaecd26cf74";
const units = "metric";
export class URL{
    static readonly citiesURL = "https://pkgstore.datahub.io/core/world-cities/world-cities_csv/data/6cc66692f0e82b18216a48443b6b95da/world-cities_csv.csv";
    static readonly getCurrentWeatherURL = api + "data/2.5/";
    static readonly getHourlyForcastURL = api + "data/2.5/"
    //static readonly citiesURL = "";
}