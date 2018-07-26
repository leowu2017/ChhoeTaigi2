export const createEmbreeTaigiSuTianString = `CREATE TABLE EmbreeTaigiSuTian
(
    id bigint,
    poj_input character varying,
    poj_unicode character varying,
    tailo_input character varying,
    tailo_unicode character varying,
    hoagi character varying,
    abbreviations character varying,
    noun_classifiers character varying,
    reduplication character varying,
    english_descriptions character varying,
    page_number character varying
)`;


function checkString(string) {
    if (string === undefined)
        return '';
    else
        return string.replace(/'/g, "''");
}

export const getEmbreeTaigiSuTianString = function(jsonArray) {
    var returnStr = "INSERT INTO EmbreeTaigiSuTian (id, poj_input, poj_unicode, tailo_input, tailo_unicode, hoagi, abbreviations, noun_classifiers, reduplication, english_descriptions, page_number) VALUES";
    for (const json of jsonArray) {
        returnStr += "('" + json.id + "', '" + checkString(json.poj_input) + "', '" + checkString(json.poj_unicode) + "', '" + checkString(json.ailo_input) + "', '" + checkString(json.tailo_unicode) + "', '" + checkString(json.hoagi) + "', '" + checkString(json.abbreviations) + "', '" + checkString(json.noun_classifiers) + "', '" + checkString(json.reduplication) + "', '" + checkString(json.english_descriptions) + "', '" + checkString(json.page_number) + "'),";
    }
    
    return returnStr.slice(0, -1);
}