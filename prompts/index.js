module.exports = [
    {
        name: 'hasVueRouter',
        type: 'confirm',
        message: 'Is your project already setup with Vue Router?',
        description: 'This will affect how App.vue is setup for you',
        default: false,
        validate: input => !!input
    }
]