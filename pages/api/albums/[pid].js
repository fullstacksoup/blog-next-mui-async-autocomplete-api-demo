const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';
import LibConst from "@/libs/SiteConn";

export default async function (req, res){

  if (req.method === 'GET') {
    try{
      
      const { pid } = req.query
      console.log('pid', pid)
      var dbFile = LibConst.get_config().ChinookDbFileName
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
    
      const results = await db.all(
        `SELECT AlbumId, ArtistId, Title FROM albums WHERE Title LIKE '${pid}%'`,              
      )    
               
      res.json(results);

    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }   
  }
};