const {connection} = require("../../db/db_config")
const createEventService=(
    event_name,from_date,to_date,is_active,callback
)=>{
    connection.query(`INSERT INTO events VALUES (NULL,"${event_name}","${from_date}","${to_date}","${is_active}",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
    (err,result)=>{
        if(err){
            callback(err,null);
        }else{
            callback(null,result);
        }
    }
    );
};

module.exports={createEventService};