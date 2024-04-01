import languageConfig from "./lang.json"

const I18n = (keyword)=>{
    const lang = localStorage.getItem('lang') || "en";

    return languageConfig[lang][keyword];
}

export default I18n;