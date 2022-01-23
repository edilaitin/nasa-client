export interface AOPD {
    date: string,
    title: string,
    explanation: string,
    url: string,
    media_type: string,
    service_version: string
}

export interface RoverResponse {
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

export interface LibraryResponse {
    collection: {
        items: {
            href: string,
            data: {
                "description": string,
                "title": string,
                "nasa_id": string,
                "date_created": string,
                "keywords": string[],
                "media_type": string,
                "description_508": string,
                "center": string
            }[],
            links: {
                "href": string,
                "rel": string,
                "render": string
            }[]
        }[]
    }
}