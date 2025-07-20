variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
}

variable "aws_profile" {
  description = "AWS CLI profile name"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID for the EKS cluster"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs"
  type        = list(string)
}

variable "eks_cluster_name" {
  description = "EKS Cluster Name"
  type        = string
}

variable "eks_node_instance_type" {
  description = "EC2 instance type for EKS nodes"
  type        = string
}

variable "eks_desired_capacity" {
  description = "Desired node count"
  type        = number
}

variable "eks_min_size" {
  description = "Minimum node count"
  type        = number
}

variable "eks_max_size" {
  description = "Maximum node count"
  type        = number
}
