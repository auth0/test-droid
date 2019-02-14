module.exports = function() {
    return {
        pong: function(request, response) {
            return response.text('Pong!').send();
        },
        echo: function(request, response) {
            const message = request.params.message
            const name = request.params.name
            return response.text(`Sending echo ${message} ${name}`).send();
        }
    };
}
