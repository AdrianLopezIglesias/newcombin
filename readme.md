# NewCombin Challenge por Adrián Lopez Iglesias
## Deploying
set database config "config/config.js" with your own credentials
then run: 
```
npm i
sequelize db:migrate  
sequelize db:seed:all //Optional seed to test the DB
npm run dev 
``` 


## Routes
### Create payable
post.http://localhost:3000/payables
```
{
    "type": "agua",
    "description": "aguas de corrientes",
    "due_date": "01/06/1990",
    "value": 2500,
    "status": "pending",
    "barcode": 15124312
}
```

### Get Payables
get.http://localhost:3000/payables
get.http://localhost:3000/payables?type=luz
get.http://localhost:3000/payables?type=agua



### Create transaction
post.http://localhost:3000/transactions
```
{
    "payment_method": "agua",
    "credit_card_number": "1111222233334444",
    "payment_value": 2500,
    "codebar": 15124312,
    "payment_date": "11/20/2021"
}
```

### get Transactions
get.http://localhost:3000/transactions
get.http://localhost:3000/transactions?from=11/19/2021
get.http://localhost:3000/transactions?to=11/16/2021
get.http://localhost:3000/transactions?from=11/14/2021&to=11/16/2021