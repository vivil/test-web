FROM node:6
MAINTAINER viviljp <vivil@vivil.jp>

COPY ./server /server
WORKDIR /server
RUN npm install
EXPOSE 3000/tcp

COPY ./healthcheck.sh /healthcheck.sh
RUN chmod 755 /healthcheck.sh
HEALTHCHECK --interval=10s --timeout=3s --retries=1 CMD /healthcheck.sh

CMD ["npm", "start"]
