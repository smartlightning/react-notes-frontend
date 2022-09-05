
export const authHeader = () => {
    let token = sessionStorage.getItem('token')
    return {Authorization: 'Bearer ' + token }
}