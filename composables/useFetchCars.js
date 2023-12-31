export default (city, filters) => {
    const { data, error, refresh } = useFetch(`/api/cars/${city}`, {
        params:{
            ...filters
        }
    })

    if(error.value){
        throw createError({
            ...error.value,
            statusMessage:"Unable to fetch cars",
        })
    }

    return {data, refresh};
}