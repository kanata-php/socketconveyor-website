import './style.css'
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {

            /**
             * Content
             */
            title: 'Socket Conveyor',
            subtitle: 'Broadcasting WebSockets Messages\n' +
                '                <span class="text-[#0b90ab] font-bold">with PHP</span>:<br/>' +
                '                <span class="block text-sm text-gray-600">Channels, Listeners and Customized implementations...</span>',
            subtitle_mobile: 'Broadcasting WebSockets Messages\n' +
                '                <span class="text-[#0b90ab] font-bold">with PHP</span>:<br/>' +
                '                <span class="block text-sm text-gray-600">Channels, Listeners and Customized implementations...</span>',
            links: [
                {
                    href: 'https://kanata-php.github.io/socket-conveyor/#/',
                    text: 'Visit the <strong class="group-hover:underline">Documentation</strong>'
                },{
                    href: 'https://github.com/kanata-php/socket-conveyor',
                    text: 'Visit the <strong class="group-hover:underline">Source Code</strong>'
                },
            ],

            /**
             * Assets
             */
            logo: '/imgs/socket-conveyor-logo.svg',

            /**
             * Colors
             */
            color: '#0b90ab',
        }
    },

    mounted() {
        this.loaded();
    },

    methods: {
        loaded() {
            document.querySelector('#loading').classList.add('hidden');
            document.querySelector('#app').classList.remove('hidden');
        }
    },
}).mount('#app')
