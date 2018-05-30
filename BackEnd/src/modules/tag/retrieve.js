import { query, queryOne } from "app/lib/mysql";

const getTagByName = async (tag) => {
    const rows = await queryOne("SELECT * FROM `tag` WHERE `tag` = ?", tag);
    return rows;
}

export {
    getTagByName,
}
