const {connection} = require("../../db/db_config")

module.exports = {
    getEventsController: (req,res)=>{
        connection.query("SELECT * FROM `events`",(err,results)=>{
            if(err){
                res.send("Error reading from DB");
            } else{
                res.json(results);
            }
        });
    },
    createEventController: (req,res)=>{
        const event_name=req.body.event_name;
        const from_date=req.body.from_date;
        const to_date=req.body.to_date;
        const is_active=req.body.is_active;

        connection.query(`INSERT INTO events VALUES (NULL,"${event_name}","${from_date}","${to_date}","${is_active}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,(err,results)=>{
            if(err){
                res.send("Error reading from DB");
            } else{
                res.json(results);
            }
        });
    },
};