# Dockerfile  
FROM ubuntu:14.04
MAINTAINER github/gotstago

#docker create --privileged -e "DISPLAY" -v="/tmp/.X11-unix:/tmp/.X11-unix:rw" -v="/home/dev:/home/developer:rw" -u developer -w /home/developer -h vsc-dev --name="vsc-dev" -i -t vsc-dev /bin/bash
#xhost si:localuser:$USER               <-- to make sure we can connect to the X-server and start GUI applications
#docker start vsc-dev
#docker exec -ti vsc-dev sudo -u developer /vcs/VSCode-linux-x64/Code

# ===== install/setup prerequisites =====
RUN apt-get update

# Use the "noninteractive" debconf frontend
ENV DEBIAN_FRONTEND noninteractive  

# Replace 1000 with your user / group id
RUN export uid=1001 gid=1001 && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:${gid}:developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:${gid} -R /home/developer

RUN apt-get update && apt-get install -y unzip sudo libgtk2.0-0 libgconf2-4 libnss3 \  
            libasound2 libxtst6 libcanberra-gtk-module libgl1-mesa-glx && rm -rf /var/lib/apt/lists/*

# source http://download.microsoft.com/download/0/D/5/0D57186C-834B-463A-AECB-BC55A8E466AE/VSCode-linux-x64.zip  
ADD ./VSCode-linux64.zip /vcs/


WORKDIR /vcs  
RUN unzip VSCode-linux64.zip && rm VSCode-linux64.zip  

#RUN chown ${uid}:${gid} -R /data

#RUN adduser --disabled-login --uid 1001 \--gecos 'developer' developer
ENV HOME /home/developer
ENV USER developer
USER developer
#CMD ["sudo","-u","developer","/vcs/VSCode-linux-x64/Code"]  
