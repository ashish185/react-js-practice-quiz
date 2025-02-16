variable "usernames" {
  type=list(string)
  description = "Enter the usernames"
}

output "printnameandage" {
  value = length(var.usernames) > 0 ? "Welcome user: ${var.usernames[0]}" : "No users provided"
}