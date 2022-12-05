import axios from 'axios'

export class ClickupApiCarselona {

    static async createTask(list_id:any, data: any, event_name: any,apikey:any){
        let apiReport:any = {
            external_api_name: 'clickup_create_task',
            event_name: event_name,
            trigger_datetime: new Date().toISOString(),
            request_data: JSON.stringify({ list_id, data }),
        }
        let response = await axios.post(`https://api.clickup.com/api/v2/list/${list_id}/task`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                apiReport['status_code'] = response.status
                return response.data;

            }).catch(async (error) => {
                if (error.response) {
                    apiReport['status_code'] = error.response.status ?? 400
                    apiReport['response_data'] = JSON.stringify(error.response.data)
                    //await Model.ExternalApiTracking.create(apiReport)
                }
                return error.response;
            });


        return response
    }
    
}