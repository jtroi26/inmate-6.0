# prisma-crud-project

1. type npm install -g express-generator@4 ejs prisma@latest -g nodemon caesar-encrypt
2. type express
3. type npx prisma init
4. modify mongodb database url to env file
5. modify prisma file located @ /prisma/schema-prisma
6. change datasource db provider to mongodb
7. insert this after datasource db 

8. type prisma db push
9. type prisma generate client
10. modify package.json scripts to

        "scripts": { 
    
            "start": "nodemon app.js" 
        },
    
11. type npm start

