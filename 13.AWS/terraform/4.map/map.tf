/* Printing the name and age with the help of map */

variable "usermap" {
    type = map
    default = {
        name= "Mukul"
        age= 27
    }
  
}

output "printnameandage" {
  value = "Hello ${lookup(var.usermap, "name")} and age is ${lookup(var.usermap, "age")}"
}