

export const definedMessages = {
    UNKNOWN_ERROR: "Some error occured while processing your request.",
    UNKNOWN_ERROR_TRY_AGAIN: "Some error occured while processing your request, please try again."
}



export const REGEX = {
    PASSWORD: new RegExp(""),
    // WEBSITE: new RegExp("^(https?://)?(www.)?([a-zA-Z0-9-]+.)+[a-zA-Z]{2,}(/)?$")
    // ammar changes
    WEBSITE: new RegExp("^(https?://)?(www.)?[a-zA-Z0-9.-]+.[a-zA-Z0-9]{2,}$")
}


export const DATE_FORMATS = {
    ARTICLE_TABLE: 'dd MMMM, yyyy '
    // ARTICLE_TABLE: 'MMMM yyyy, EEEE h:mma'

}

export const DEFAULTS = {
    PER_PAGE_ITEMS: 10
}



const CONSTANTS = {
    REGEX,
    definedMessages,
    DATE_FORMATS,
    DEFAULTS
}
export default CONSTANTS
