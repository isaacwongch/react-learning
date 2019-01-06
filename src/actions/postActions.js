//FOR action creator

export const deletePost = (id) =>{
    return {
        type: 'DELETE_POST',
        id
    }
}