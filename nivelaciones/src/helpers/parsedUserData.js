import { DateTime } from 'luxon';


const getCity = (location) => {
  return `${location.city}`;
}
const parsedName = (name) => {
  return `${name.title}. ${name.first} ${name.last}`
}
export const parsedUserData = (data) => {
  if(data.picture === undefined) return {} 
  const { gender, name, email, phone, nat, location, picture, dob } = data;
  const image = picture.large;
  const age = dob.age;
  const bornDate = DateTime.fromISO(dob.date).toFormat('yyyy LLL dd');
  return {
    gender, age, bornDate, name: parsedName(name), email, phone, nat, location: getCity(location), image
  }
}