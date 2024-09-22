export const required = value =>{
    if(value) return undefined;
    
    return "Error message/ Field is required"
}


export const maxLenghtCreator = maxLength => value=>{
    if(value.length > maxLength) return `Error message/ Maximum length exceeded is ${maxLength} sumbols`;
    
    return undefined
}