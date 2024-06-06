export interface Hourly {
    temp: number;
    humidity: number;
    weather: Weather[];
    time: string;
}

interface Weather {
    id:number;
    main:string;
    description:string;
    icon:string;
}