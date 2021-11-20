# online-logforum
Docker Clear all
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)


Local start
1. start db docker-compose down; docker-compose -f .\docker-compose-db.yml up -d --build; 
2. cd backend ---> npm start 
3. cd frontend ---> npm start
