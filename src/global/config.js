export const api_domain = 'http://localhost:8000/'
export const login_url = api_domain + 'oauth/token'
export const user_url = api_domain + 'api/user'
export const users_list_url = api_domain + 'api/v1/users-list'

export const create_user_url = api_domain + 'api/v1/create-user'
export const get_sharper_details_url = api_domain + 'api/v1/get-sharper-details'

export const add_project_url = api_domain + 'api/v1/add-project'

export const get_available_rides_url = api_domain + 'api/v1/get-available-rides'

export const forgot_password_url = api_domain + 'api/forgot-password'
export const reset_password_url = api_domain + 'api/reset-password'


export   const get_header  = function () {
    const token_date = JSON.parse(window.localStorage.getItem('auth_user'))
    const headers = {
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' +  token_date.access_token,
    }
    return headers
}
