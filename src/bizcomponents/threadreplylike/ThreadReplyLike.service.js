import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`threadReplyLikeManager/view/${targetObjectId}/`

    });
}

const ThreadReplyLikeService={view};
export default ThreadReplyLikeService;




