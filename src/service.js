import Axios from 'axios'
const env = 'http://localhost:3000/'
export default {
    getAll(uri){
        return Axios.get(env+uri);
    },
    add(uri, data){
        return Axios.post(env+uri, data);
    },
    update(uri, data){
        return Axios.put(env+uri, data);
    },
    delete(uri, id){
        return Axios.delete(env+uri + '/' + id);
    },  
    getByid(uri, id){
        return Axios.get(env+uri + '/' + id)
    },
    search(uri, name){
        return Axios.get
        (env+uri,
            { params: { 'nama_like' : name } }
        )
    }
}