#!/bin/bash
echo "✅ Running Ansible Playbooks..."
ansible-playbook -i ansible/inventory.ini ansible/init_swarm_cluster.yml