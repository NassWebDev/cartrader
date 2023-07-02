import cars from '@/data/cars.json';

export default defineEventHandler((event) => {
    const {id} = event.context.params;

    const car = cars.find((car) => {
        return car.id == parseInt(id)
    })

    if (!car) {
        throw createError({
          statusCode: error.value.statusCode,
          message: error.value.statusMessage,
        });
    }

    return car;
})