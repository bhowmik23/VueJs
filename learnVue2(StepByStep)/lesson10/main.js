Vue.component('modal', {

    template: `
        <div class="modal" is-active">
            <div class="modal-background">
                <div class="modal-content">
                    <div class="box">
                        <slot></slot>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click ="$emit('close')"></button>
        </div>`,

}
});

   

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});