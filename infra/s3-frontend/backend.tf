terraform {
  backend "s3" {
    bucket = "tasksphere-tfstate-sonu"
    key    = "s3-frontend/terraform.tfstate"
    region = "ap-south-1"
  }
}
