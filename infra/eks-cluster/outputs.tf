output "eks_cluster_name" {
  value = module.eks.cluster_name
}

output "eks_cluster_endpoint" {
  value = module.eks.cluster_endpoint
}

output "eks_cluster_certificate_authority" {
  value = module.eks.cluster_certificate_authority_data
}

output "eks_node_group_names" {
  value = module.eks.eks_managed_node_groups[*].node_group_name
}
