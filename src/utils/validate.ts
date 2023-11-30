export const validEmail = (email: any) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

export const validaRequired = (param: string) => {
    if(param.length == 0) {
        return false
    } else {
        return true
    }
} 

export const validUsername = (username: string) => {
   if(username.length < 5) {
    return false
   } else {
    return true
   }
}

export const validPassword = (password: string) => {
    if(password.length < 8) {
     return false
    } else {
     return true
    }
}
export const validConfirmPassword = (confirmPassword: string,password: string ) => {
    if(confirmPassword !== password) {
     return false
    } else {
     return true
    }
}
