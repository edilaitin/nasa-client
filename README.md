# Nasa Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

- Run `npm i` in order to install the required dependecies
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# The public API used

NASA API available [here](https://api.nasa.gov/). All the calls to the API are all are in the `nasa-api.service.ts` file. From the API I used the following endpoints: 

## <b>APOD</b> - Astronomy Picture of the Day

### Route
```
GET https://api.nasa.gov/planetary/apod
```
### With query parameters: 
```
- api_key: the API key obtained from NASA 
- date: format "YYYY-MM-DD"
```
### Response 

```ts
{
    date: string,
    title: string,
    explanation: string,
    url: string,
    media_type: string,
    service_version: string
}
```

## <b>Mars Rover Photos</b> - Image data gathered by NASA's Curiosity rover on Mars

### Route
```
GET https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos
```
### With query parameters: 
```
- api_key: the API key obtained from NASA 
- earth_date: format "YYYY-MM-DD"
```

### Response 

```ts
{
    photos: {
        id: number,
        sol: number,
        camera: {
            id: number,
            name: string,
            rover_id: number,
            full_name: string 
        },
        img_src: string,
        earth_date: string
        rover: {
            id: number,
            name: string,
            launch_date: string,
            status: string
        }
    }[]
}
```

## <b>NASA Image Library</b> 

### Route
```
GET https://images-api.nasa.gov/search
```
### With query parameters: 
```
- media_type: "image"
- q: user defined text for query
```

### Response 

```ts
{
    collection: {
        items: {
            href: string,
            data: {
                description: string,
                title: string,
                nasa_id: string,
                date_created: string,
                keywords: string[],
                media_type: string,
                description_508: string,
                center: string
            }[],
            links: {
                href: string,
                rel: string,
                render: string
            }[]
        }[]
    }
}
```

# Client

## The client has 3 main components: 

- AOPD component: make a request to the <b>AOPD API</b> and display the Astronomy Picture of the Day for the user selected date.

- Rover component: make a request to the <b>Mars Rover Photos API</b> and display the rover photos for the user selected date.

- Image library component: make a request to the <b>Images Library API</b> and display the photos for the query introduced by the user.
