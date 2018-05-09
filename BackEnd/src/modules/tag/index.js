import { insertTag } from 'app/modules/tag/create';

const createNewTag =async (params) => {
    const { tag } = params;
    if (tag) {
        const tagId = await insertTag(tag);
        if(tagId) {
            return [200, tagId];
        }
    }
}

export {
    createNewTag,
};