import VueRouter from 'vue-router'
import PingConcerntrate from './ping/Concerntrate.vue'
import PingHangaround from './ping/hangaround.vue'
import PingMine from './ping/Mine.vue'
import PingPerson from './ping/Person.vue'
import Peer from './peer/Peer.vue'
import InfoMine from './info/Mine.vue'
import InfoPerson from './info/Person.vue'

export default new VueRouter({
    mode: "hash",
    base: __dirname,
    routes: [
        {name: 'ping-concerntrate', path:'/ping/concerntrate', component: PingConcerntrate},
        {name: 'ping-hangaround', path:'/ping/hangaround', component: PingHangaround},
        {name: 'ping-mine', path:'/ping/mine', component: PingMine},
        {name: 'ping-person', path:'/ping/person', component: PingPerson},
        {name: 'peer', path:'/peer', component: Peer},
        {name: 'info-mine', path:'/info/mine', component: InfoMine},
        {name: 'info-person', path:'/info/person', component: InfoPerson},
    ]
})