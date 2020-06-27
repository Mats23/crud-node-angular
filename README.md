# crud-node-angular


# comandos para o back e front dentro das respectivas pastas
```
npm i 

```


#comando para subir o banco de dados
dentro da pasta db executar o docker-compose
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


# start front
```
npm start
```

# start back
```
npm run local
```

Login: admin
Senha: admin
