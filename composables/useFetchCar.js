export default (id) => {
    const { data, error } = useFetch(`/api/car/${id}`)

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage:"Unable to fetch the car",
        })
    }

    return {data};
}