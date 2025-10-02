import { faker, Faker } from "@faker-js/faker";
export class RandomDataUtil
{
static getFirstName()
{
return faker.person.firstName()
}
static getLastName()
{
return faker.person.lastName()
}
static getEmail()
{
return faker.internet.email();
}
static getPhoneNumber()
{
return faker.phone.number();
}
static getUserName():string
{
return faker.internet.username();
}
static getPassword():string
{
return faker.internet.password();
}
static getRandomCountry():string
{
return faker.location.country();
}
static getRandomState():string
{
return faker.location.state();
}
static getRandomCity():string
{
return faker.location.city();
}
static getRandompin():string
{
return faker.location.zipCode();
}
static getRandomAddress():string
{
return faker.location.streetAddress();
}
static getRandomPassword(lenth:number):string
{
return faker.internet.password({length});
}
static getRandomAlphanumeric(length:number):string
{
return faker.string.alphanumeric(length);
}
static getRandomNumeric(length:number):string
{
return faker.string.numeric(length);
}
static getRandomUUID():string
{
return faker.string.uuid();
}
}
