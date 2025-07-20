variable "s3_bucket_name" {
  description = "The name of the S3 bucket to create"
  type        = string
}

variable "enable_website_hosting" {
  description = "Enable static website hosting on the S3 bucket"
  type        = bool
  default     = true
}

variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
}

variable "aws_profile" {
  description = "The AWS CLI profile to use"
  type        = string
  default     = "default"
}
