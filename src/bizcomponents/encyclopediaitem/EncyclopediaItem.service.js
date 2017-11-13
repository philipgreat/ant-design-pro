import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`encyclopediaItemManager/view//`

    });
}

const EncyclopediaItemService={view};
export default EncyclopediaItemService;




