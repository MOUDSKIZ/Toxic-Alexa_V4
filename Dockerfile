FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXICTURBO/Toxic-Alexa_V4 /root/Alexa
WORKDIR /root/Alexa/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
