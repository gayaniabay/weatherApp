export class CurrentWeather{
    name : string;
    id: number;
    main:{
       temp: number,
       humidity: number,
       temp_min: number,
       temp_max: number
    };
    wind : {
        speed: number
    };
    weather : [
        {
            icon: string
        }
    ]
}