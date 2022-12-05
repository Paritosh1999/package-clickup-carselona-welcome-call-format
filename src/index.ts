import  { ClickupApiCarselona } from './createtask'
 class welcomecallformat {
    static async formatSubscriptionForWelcomeCall(inputdata:any) {
        const custom_fields:any =[];
        const input_custom_field_array = Object.keys(inputdata.custom);
        const custom_field_len = input_custom_field_array.length;
        for( var i = 0; i < custom_field_len; i++){
            var field:any ={
                'id':input_custom_field_array[i],
                'value': inputdata.custom[input_custom_field_array[i]]
            }
            custom_fields.push(field);
        }
       
        const data: any = {
          name: inputdata.name,
          description: inputdata.description,
          parent: null,
          // "links_to": null,
          check_required_custom_fields: true,
          custom_fields: JSON.stringify(custom_fields)
        };
        console.log(data);
        // data = this.taskKeys
       
        
        
    
        return data;
    }
}

export { welcomecallformat , ClickupApiCarselona };
