const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
/*Explanation
You're using nested destructuring here:

Extracting name from person

Then inside location, extracting:

country

city

Destructuring coordinates array into lat and lng 
So the output 
I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207) 
 */