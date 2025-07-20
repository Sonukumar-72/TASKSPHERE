aws_region             = "ap-south-1"
aws_profile            = "default"
vpc_id                 = "vpc-078b1cbb01de6c03d"
eks_cluster_name       = "tasksphere-eks"
eks_node_instance_type = "t2.medium"
eks_desired_capacity   = 2
eks_min_size           = 1
eks_max_size           = 3

subnet_ids = [
  "subnet-08f104300d9e8c952",
  "subnet-01a0b8f83b04fc21d"
]
