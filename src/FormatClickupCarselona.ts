import axios from 'axios'

export class FormatClickupCarselona {
    static async formatSubscriptionForWelcomeCall(inputdata:any) {
        console.log("moin",inputdata)
        const custom_fields:any =[];
        const input_custom_field_array = Object.keys(inputdata.custom);
        console.log(input_custom_field_array)
        const custom_field_len = input_custom_field_array.length;
        console.log(input_custom_field_array[0] );
        console.log(inputdata.custom[input_custom_field_array[0]] )
        for( var i = 0; i < custom_field_len; i++){
            var field:any ={
                'id': inputdata.custom[input_custom_field_array[i]],
                'value':input_custom_field_array[i]//
                
            }
            custom_fields.push(field);
        }
        console.log("custom fields array is: ===================== ");
        console.log(custom_fields);
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

    static async formatDataForParentTask(data: any, deletedataarray: any) {
        
        for( let i = 0; i < deletedataarray.length; i++){
            delete data.custom_fields[deletedataarray[i]];
        }
        // delete data.custom_fields['0ae5fd69-71bb-46a9-a5a6-b7ad3d93cfe7']; //car brand
        // delete data.custom_fields['2f1875a7-f6fd-4787-a1e9-0b7bf614d53b']; // substatus
        // delete data.custom_fields['3b755a54-b7ec-48c8-b57c-4ade45d23790']; //date of pause/stop
        // delete data.custom_fields['56031420-9655-4bfa-bb03-7cd59d4f935d']; //vehicle number
        // delete data.custom_fields['92ba1d8a-4858-4668-929f-ff8b74b729fd']; //frequency
        // delete data.custom_fields['ce1bbb97-d6b7-4ec3-ada0-0a7368e8ce63']; //vehicle type
        // delete data.custom_fields['efe81f76-dee9-4fa3-ac82-bba03e09a76b']; //reason
    }
}