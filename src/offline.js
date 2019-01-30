import { GET_NOTES } from "./query";

export const saveNotes = cache => {
    const JSONNote = cache.readQuery({query:GET_NOTES})
    const STRINGNote = JSON.stringify(JSONNote)

    try{
        localStorage.setItem("notes",STRINGNote)
    } catch(e){
        console.log(e)
    }
}

export const restoreNotes = () => {
    const notes = localStorage.getItem("notes")
    if(notes){
        try{
            const parsedNotes = JSON.parse(notes)
            return parsedNotes.notes
        } catch(e){
            console.log(e)
            return []
        }
    }
    return []
}