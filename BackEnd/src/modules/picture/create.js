import { query, queryOne } from "app/lib/mysql";

const insertPicture = async (pictureAddr, pictureName) => {
    const insertRow = {
        picture_addr: pictureAddr,
        picture_name: pictureName,
    }
    const row = queryOne('INSERT INTO picture SET ?', insertRow)
}

export {
    insertPicture,
}