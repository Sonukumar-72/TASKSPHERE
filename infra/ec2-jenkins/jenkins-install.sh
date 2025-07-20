#!/bin/bash

# Update system packages
sudo yum update -y

# Install Java 11
sudo amazon-linux-extras enable java-openjdk11
sudo yum install -y java-11-openjdk

# Add Jenkins repo and import GPG key
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

# Install Jenkins
sudo yum install -y jenkins

# Start and enable Jenkins service
sudo systemctl enable jenkins
sudo systemctl start jenkins
