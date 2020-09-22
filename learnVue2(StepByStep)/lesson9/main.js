Vue.component('message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: '<article class="message" v-show = "isVisible" ><div class="message-header">{{ title }}<button @click="hideModal" class="delete" aria-label="delete"></button></div><div class="message-body">{{ body}}</div></article>',

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

   

new Vue({
    el: '#root',
});