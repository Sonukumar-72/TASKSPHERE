terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"   # Change to your bucket name
    key            = "ec2-jenkins/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
    