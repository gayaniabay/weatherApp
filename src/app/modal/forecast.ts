export class Forecast{
    list :[{
        dt: number;
        dt_txt : string;
        main : {
            temp: number;
            humidity: number;
        }
        clouds: {
            all : number;
        }
        wind: {
            speed : number;
        }
    }]
}