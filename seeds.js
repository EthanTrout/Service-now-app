const mongoose = require('mongoose');

const NoteableFields = require("./Models/noteablefields");
 const TableBios = require("./Models/tablebios");

    main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/Sams-App');
      console.log('connected to db SamsApp')
    }








const seedNotableFeilds = 
[
    {
        
        u_table_name:"sys_user_grmember",
        
        u_description:"The user who has membership to the group in question",
        
        u_field_label:"User",
        u_field_name:"user",
        
        
    },
        
    
    {
        
        u_table_name:"sys_user",
        
        u_description:"The username required to log in to the system locally. This is the value that populates the sys fields.",
        
        u_field_label:"User ID",
        u_field_name:"user_name",
        
    },

    

    {
        
        u_table_name:"sys_user_grmember",
        
        u_description:"The group in question",
        
        u_field_label:"Group",
        u_field_name:"group",
        
        
    },

    {
        u_table_name:"sys_user",
        
        u_description:" This field is auto-generated from the First Name and Last Name fields. ",
        
        u_field_label:"Name",
        u_field_name:"name",
        
    }
    
]
// NoteableFields.deleteMany({})
// .then(res=>{
//     console.log(res)
// })
// .catch(e=>{
//     console.log(e)
// })

NoteableFields.insertMany(seedNotableFeilds)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})


const seedtablebios= [{
    
    
    u_table_name:"sys_user_grmember",
    
    u_description:"The sys_user_grmember table is a many-to-many table between the <a href='/tables/sys_user'>sys_user'</a> table and the <a href='/tables/sys_user_group'>sys_user_group</a> table. It holds the information about which members which groups have. It appears as the 'Groups' related list on the <a href='/tables/sys_user'>sys_user</a> record.",
    
    u_table_label:"Group Member",
    },

    {"u_notes":"Notable fields: Granted by, Inherited",
    
    u_table_name:"sys_group_has_role",
    
    u_description:"The sys_group_has_role table is a many-to-many table between the <a href='/tables/sys_user_group'>sys_user_group</a> table and the <a href='/tables/sys_user_role'>sys_user_role</a> table. It holds the information about which roles each group has. It appears as the 'Roles' related list on the <a href='/tables/sys_user_group'>sys_user_group</a> record.",
    
    u_table_label:"Group Role",
    },

    {"u_notes":"Notable fields: manager, parent, group email, manage subscriptions related list",
    
    u_table_name:"sys_user_group",
    
    u_description:"The sys_user_group table holds a record for each of the groups used in ServiceNow. Groups are used to assign a set of roles and permissions to a user. This is the recommended best practice over directly assigning roles to user accounts.\r\n\r\nThe information on which users are part of which groups is held in the <a href='/tables/sys_user_grmember'>sys_user_grmember</a> table, and the information on which roles which groups have is held in the <a href='/tables/sys_group_has_role table. Both of these display as related lists on the form.",
    
    u_table_label:"Group",
    },

    {"u_notes":"",
    
    u_table_name:"sys_user",
    
    u_description:"This table holds the records for all end users. A user must have a record in this table in order to access ServiceNow (other than knowledge articles if specifically configured).","u_link_description":"This table holds the records for all end users. A user must have a record in this table in order to access ServiceNow (other than knowledge articles if specifically configured).",
    
    u_table_label:"User",
    }
]
// TableBios.deleteMany({})
// .then(res=>{
//     console.log(res)
// })
// .catch(e=>{
//     console.log(e)
// })

TableBios.insertMany(seedtablebios)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})