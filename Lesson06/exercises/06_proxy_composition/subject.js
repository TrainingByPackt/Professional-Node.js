function subject() {
    return {
        hello: () => {
            return "Subject Hello";
        },

        goodbye: () => {
            return "Subject Goodbye";
        }
    };
}

module.exports = subject;