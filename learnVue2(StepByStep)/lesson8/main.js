Vue.component('task-list', {
    // template: '<li>Foobar</li>',
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true},
                { task: 'Go to the store', complete: false},
                { task: 'Go to the store', complete: false},
                { task: 'Go to the store', complete: true},           
            ]
        };
    }
});

Vue.component('task', {
    // template: '<li>Foobar</li>',
    template: '<li><slot></slot></li>',
});

new Vue({
    el: '#root',
});