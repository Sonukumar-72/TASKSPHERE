provider "aws" {
  region  = "ap-south-1"
}
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"
}
