# crud-node-angular


#Comandos para o back e front dentro das respectivas pastas
```
npm i 

```


#Comando para subir o banco de dados
Dentro da pasta "db" execute o docker-compose
```
docker-compose -f stack.yml up
```

#Migrations
execute o seguinte comando: 

```
npm install -g migrate-mongo
```

 Em seguida na pasta crud-back\src\migration executar:
 ```
 migrate-mongo up
 
 ```


# Start front
```
npm start
```

# Start back
```
npm run local
```

Login: admin
Senha: admin
