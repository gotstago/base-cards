# Dockerfile  
FROM ubuntu:14.04
MAINTAINER github/gotstago

#docker build -t node-dev .
#docker create --privileged -v="/home/dev:/home/developer:rw" -u developer -w /home/developer -h node-dev --name="node-dev" -i -t node-dev /bin/bash
#docker start node-dev
#docker exec -ti node-dev sudo -u developer /bin/bash

# ===== install/setup prerequisites =====
#RUN apt-get update

# Use the "noninteractive" debconf frontend
ENV DEBIAN_FRONTEND noninteractive  

RUN apt-get update && apt-get install -y \
    build-essential \
    ca-certificates \
    curl \
    git \
    libasound2 \
    libgconf-2-4 \
    libgnome-keyring-dev \
    libgtk2.0-0 \
    libnss3 \
    libxtst6 \
    --no-install-recommends

RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs


# Replace 1000 with your user / group id
RUN export uid=1001 gid=1001 && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:${gid}:developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:${gid} -R /home/developer

ENV HOME /home/developer
ENV USER developer
USER developer

