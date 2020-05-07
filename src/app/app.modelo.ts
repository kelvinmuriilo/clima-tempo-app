
interface Temperatura{
    temp: number,
    description: string,
    city: string,
    humidity: number,
    forecast: Array<any>
}

interface Request{
    array_limit: number,
    fields: string,
    key: number
}

export{
    Temperatura,
    Request
}
