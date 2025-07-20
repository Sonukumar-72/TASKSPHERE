output "s3_bucket_name" {
  description = "The name of the S3 bucket"
  value       = aws_s3_bucket.frontend.bucket
}

output "s3_bucket_website_endpoint" {
  description = "The website endpoint of the S3 bucket"
  value       = var.enable_website_hosting ? aws_s3_bucket_website_configuration.website[0].website_endpoint : ""
}
