const mongoose = require('mongoose');

const NoteableFields = require("./Models/noteablefields");
 

    main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/SamsApp');
      console.log('connected to db SamsApp')
    }








const seednoteablefields = 
[
    {
        "u_table":"66ce764d972131108590d48ef053afde",
        u_table_name:"sys_user_grmember",
        "sys_mod_count":"4",
        "sys_updated_on":"2023-10-03 20:55:41",
        "sys_tags":"","sys_id":"56680785976131108590d48ef053af81",
        u_description:"The user who has membership to the group in question",
        "sys_updated_by":"admin",
        u_field_label:"User",
        u_field_name:"user",
        "sys_created_on":"2023-09-26 15:00:37",
        "u_field_type":"reference",
        "sys_created_by":"admin",
        "__status":"success",
        
    },
        
    
    {
        "u_table":"f9d69857971131108590d48ef053af13",
        u_table_name:"sys_user",
        "sys_mod_count":"6",
        "sys_updated_on":"2023-10-03 20:55:51",
        "sys_tags":"",
        "sys_id":"7a9898d7971131108590d48ef053afd8",
        u_description:"The username required to log in to the system locally. This is the value that populates the sys fields.",
        "sys_updated_by":"admin",
        u_field_label:"User ID",
        u_field_name:"user_name",
        "sys_created_on":"2023-09-20 15:44:32",
        "u_field_type":"string",
        "sys_created_by":"admin",
        "__status":"success"
    },

    

    {
        "u_table":"66ce764d972131108590d48ef053afde",
        u_table_name:"sys_user_grmember",
        "sys_mod_count":"3",
        "sys_updated_on":"2023-10-03",
        "sys_tags":"",
        "sys_id":"96e70385976131108590d48ef053af10",
        u_description:"The group in question",
        "sys_updated_by":"admin",
        u_field_label:"Group",
        u_field_name:"group",
        "sys_created_on":"2023-09-26 14:59:18",
        "u_field_type":"reference",
        "sys_created_by":"admin",
        "__status":"success",
        
    },

    {
        "u_table":"f9d69857971131108590d48ef053af13",
        u_table_name:"sys_user",
        "sys_mod_count":"4",
        "sys_updated_on":"2023-10-03 20:55:55",
        "sys_tags":"",
        "sys_id":"e80c3e89972131108590d48ef053af4d",
        u_description:" This field is auto-generated from the First Name and Last Name fields. ",
        "sys_updated_by":"admin",
        u_field_label:"Name",
        u_field_name:"name",
        "sys_created_on":"2023-09-26 14:08:50",
        "u_field_type":"string",
        "sys_created_by":"admin",
        "__status":"success"
    }

    
]


const seedtablebios= [{
    "u_notes":"",
    "u_table":"b0ce1c32d423211095d7c105f1bf4378",
    u_table_name:"sys_user_grmember",
    "u_state":"ready","sys_mod_count":"19",
    "sys_updated_on":"2023-10-03 21:07:23",
    "sys_tags":"",
    "sys_id":"66ce764d972131108590d48ef053afde",
    u_description:"The sys_user_grmember table is a many-to-many table between the $sys_user table and the $sys_user_group table. It holds the information about which members which groups have. It appears as the 'Groups' related list on the $sys_user record.",
    "u_link_description":"The sys_user_grmember table is a many-to-many table between the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user\">sys_user<\\a> table and the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user_group\">sys_user_group<\\a> table. It holds the information about which members which groups have. It appears as the 'Groups' related list on the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user\">sys_user<\\a> record.",
    "sys_updated_by":"admin",
    "sys_created_on":"2023-09-26 14:23:21",
    u_table_label:"Group Member",
    "sys_created_by":"admin",
    "__status":"success"},

    {"u_notes":"Notable fields: Granted by, Inherited",
    "u_table":"70de9472d423211095d7c105f1bf43cf",
    u_table_name:"sys_group_has_role",
    "u_state":"ready",
    "sys_mod_count":"12",
    "sys_updated_on":"2023-10-03 21:07:50",
    "sys_tags":"","sys_id":"e5a7bc2997a131108590d48ef053af0f",
    u_description:"The sys_group_has_role table is a many-to-many table between the $sys_user_group table and the sys_user_r$ole table. It holds the information about which roles each group has. It appears as the 'Roles' related list on the $sys_user_group record.",
    "u_link_description":"The sys_group_has_role table is a many-to-many table between the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user_group\">sys_user_group<\\a> table and the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user_role\">sys_user_role<\\a> table. It holds the information about which roles each group has. It appears as the 'Roles' related list on the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user_group\">sys_user_group<\\a> record.",
    "sys_updated_by":"admin","sys_created_on":"2023-09-27 17:49:01",
    "u_table_label":"Group Role",
    "sys_created_by":"admin",
    "__status":"success"},

    {"u_notes":"Notable fields: manager, parent, group email, manage subscriptions related list",
    "u_table":"fcced832d423211095d7c105f1bf43d2",
    u_table_name:"sys_user_group",
    "u_state":"ready",
    "sys_mod_count":"13",
    "sys_updated_on":"2023-10-03 21:08:02",
    "sys_tags":"",
    "sys_id":"f13238a597a131108590d48ef053affa",
    u_description:"The sys_user_group table holds a record for each of the groups used in ServiceNow. Groups are used to assign a set of roles and permissions to a user. This is the recommended best practice over directly assigning roles to user accounts.\r\n\r\nThe information on which users are part of which groups is held in the $sys_user_grmember table, and the information on which roles which groups have is held in the $sys_group_has_role table. Both of these display as related lists on the form.",
    "u_link_description":"The sys_user_group table holds a record for each of the groups used in ServiceNow. Groups are used to assign a set of roles and permissions to a user. This is the recommended best practice over directly assigning roles to user accounts.\r\n\r\nThe information on which users are part of which groups is held in the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_user_grmember\">sys_user_grmember<\\a> table, and the information on which roles which groups have is held in the <a href=\"http:\/\/www.samandethanswebsite.com\/table\/sys_group_has_role\">sys_group_has_role<\\a> table. Both of these display as related lists on the form.",
    "sys_updated_by":"admin","sys_created_on":"2023-09-27 17:26:41",
    u_table_label:"Group",
    "sys_created_by":"admin",
    "__status":"success"},

    {"u_notes":"",
    "u_table":"34ced832d423211095d7c105f1bf43eb",
    u_table_name:"sys_user",
    "u_state":"ready",
    "sys_mod_count":"12","sys_updated_on":"2023-10-03 21:08:13",
    "sys_tags":"","sys_id":"f9d69857971131108590d48ef053af13",
    u_description:"This table holds the records for all end users. A user must have a record in this table in order to access ServiceNow (other than knowledge articles if specifically configured).","u_link_description":"This table holds the records for all end users. A user must have a record in this table in order to access ServiceNow (other than knowledge articles if specifically configured).",
    "sys_updated_by":"admin",
    "sys_created_on":"2023-09-20 15:35:34",
    u_table_label:"User",
    "sys_created_by":"admin",
    "__status":"success"}
]
    
    

