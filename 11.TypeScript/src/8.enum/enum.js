var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["MANAGER"] = 1] = "MANAGER";
    Roles[Roles["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Roles || (Roles = {}));
;
console.log(Roles);
