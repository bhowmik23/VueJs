Vue.component('task', {
    // template: '<li>Foobar</li>',
    template: '<li><slot></slot></li>',
});

new Vue({
    el: '#root',
});