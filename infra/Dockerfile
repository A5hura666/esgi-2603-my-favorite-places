FROM docker:dind

# Install Python (required for Ansible)
RUN apk add --update --no-cache python3 py3-pip && ln -sf python3 /usr/bin/python
RUN apk add sudo