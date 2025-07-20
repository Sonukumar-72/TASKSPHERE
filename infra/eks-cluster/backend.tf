terraform {
  backend "s3" {
    bucket         = "tasksphere-terraform-state"  # ✅ Your actual bucket
    key            = "eks-cluster/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
