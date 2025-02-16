variable "usernames" {
  type=list(string)
  description = "Enter the usernames"
}


output "printnameandage" {
  value = "Welcome users: ${join(", ", var.usernames)}"
}