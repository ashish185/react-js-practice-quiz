/* https://registry.terraform.io/providers/hashicorp/aws/latest */
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.84.0"
    }
  }
}

provider "aws" {
  # Configuration options
  region = "ap-south-1"
}

resource "aws_instance" "ash-tf-first-ec2-instance-via-" {
  ami = "ami-0d2614eafc1b0e4d2"
  instance_type = "t3.micro"
  tags = {
    "name" = "ash-ec2-via-tf"
  }
}