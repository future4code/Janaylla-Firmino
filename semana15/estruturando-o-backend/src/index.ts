import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {countries, country, CONTINENTS} from './countries'

const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
   const result = countries.map((country) => {
      return {
         name: country.name,
         id: country.id
      }
   })
   res.send({countries: result});
})

app.get("/countries/search", (req: Request, res: Response) => {
   const name = typeof(req.query.name) === "string" ? req.query.name.toUpperCase():"",
   capital = typeof(req.query.capital) === "string" ? req.query.capital.toUpperCase():"",
   continent = typeof(req.query.continent) === "string" ? req.query.continent.toUpperCase():"";
   const result = countries.filter((country) =>
      !name || country.name.toUpperCase().includes(name as string)
   ) 
    .filter((country) => 
    !capital || country.capital.toUpperCase().includes(capital as string)
    )
    .filter((country) => 
    !continent || country.continent.toUpperCase().includes(continent as string)   
    )
   
   if (result) {
      res.status(200).send(result)
   } else {
      res.status(404).send("Not found")
   }
})

app.get("/countries/:id", (req: Request, res: Response) => {
 
   const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
   )
   
   if (result) {
      res.status(200).send(result)
   } else {
      res.status(404).send("Not found")
   }

})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
   const name = typeof(req.body.name) === "string" ? req.body.name:"",
   capital =  typeof(req.body.capital) === "string" ? req.body.capital:"";

   const index:number = countries.findIndex(
      country => country.id === Number(req.params.id)
   )
   
   const countrieEdit:any |undefined  = index>-1 && {
      id: countries[index].id,
      name:name?name: countries[index].name,
      capital:capital?capital: countries[index].capital,
      continent: countries[index].continent,
   }
   const result:country[] =  index>-1 ? [...countries] : [];
   result[index] = result[index] && countrieEdit;

 
   if (result && result.length >0) {
      res.status(200).send(result)
   } else {
      res.status(404).send("Not found")
   }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});