export interface SongsType {
    "songList": SongType[]
}
export interface SongType {
    "id": string,
    "title": 'string'
    "snippets": snippetType[]
}

interface snippetType {
    "id": string,
    "snippet": string,
    "categorie": Categories,
    "tact": number,
    "songRef": SongType
}

enum Categories {
    Bridge,
    Hook,
    Vers
}
