module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.21.0"  # ✅ Use this stable version

  cluster_name    = var.eks_cluster_name
  cluster_version = "1.28"

  vpc_id     = var.vpc_id
  subnet_ids = var.subnet_ids

  enable_irsa = true

  eks_managed_node_groups = {
    tasksphere_node_group = {
      desired_capacity = var.eks_desired_capacity
      min_capacity     = var.eks_min_size
      max_capacity     = var.eks_max_size

      instance_types = [var.eks_node_instance_type]
    }
  }

  tags = {
    Environment = "dev"
    Project     = "tasksphere"
  }
}
