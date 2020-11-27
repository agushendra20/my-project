import Axios from 'axios'
const env = 'http://localhost:3000/'
const env2 = 'http://localhost:3001/'
export default {
    handleResponse(response) {
        if (response.status !== 200) {
            if (response.status === 401) {

                const error = (response.data && response.data.message) || response.statusText
            }
        }
    },
    authHeader() {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user && user.token) {
            return { 'Authorization': 'Bearer ' + user.token }
        } else {
            return {}
        }
    },

    login(uri, data){
        const config = {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return Axios.post(env2 + uri, data, config);
    },

    logout() {
        localStorage.removeItem('user')
    },
    getAll(uri) {
        return Axios.get(env + uri);
    },
    add(uri, data) {
        const config = {
            headers: { ...this.authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return Axios.post(env + uri, data, config);
    },
    update(uri, data) {
        const config = {
            headers: { ...this.authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return Axios.put(env + uri, data, config);
    },
    delete(uri, id) {
        return Axios.delete(env + uri + '/' + id);
    },
    getByid(uri, id) {
        return Axios.get(env + uri + '/' + id)
    },
    search(uri, name) {
        return Axios.get
            (env + uri,
                { params: { 'nama_like': name } }
            )
    }
}