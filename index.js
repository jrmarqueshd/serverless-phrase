const database = require("./database");

exports.handler = async () => {
    try {
        const math_phrase = await database();

        const response = {
            statusCode: 200,
            body: math_phrase
        };

        return response;

    } catch (error) {

        const error_response = {
            statusCode: 400,
            body: {
                message: error
            }
        };

        return error_response;
    }
};
