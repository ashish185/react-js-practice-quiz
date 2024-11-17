enum Roles {
    ADMIN,
    MANAGER,
    READ_ONLY_USER
};

/* 
Enum has equal to with every constant
*/
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(Roles); /* 
{
    "0": "ADMIN",
    "1": "MANAGER",
    "2": "READ_ONLY_USER",
    "ADMIN": 0,
    "MANAGER": 1,
    "READ_ONLY_USER": 2
}
*/

console.log(Roles.MANAGER); //1

console.log(StatusCode.Success); //200