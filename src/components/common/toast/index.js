import Vue from 'vue';
import Toast from './toast';





export default {
    install(Vue) {
        // 1.创建组件构造器
        const toastConstructor = Vue.extend(Toast);
        // 2.根据组件构造器,new一个组件对象
        const toast = new toastConstructor();
        // 3.将组件对象手动挂载到某个元素上(此处为挂载到自己创建的div,div将替换组件的template)
        toast.$mount(document.createElement('div'));
        // 4.挂载完后,toast.$el对应的就是此div,将其添加到dom中
        document.body.appendChild(toast.$el)
        // 5.把创建的组建对象添加到Vue原型
        Vue.prototype.$toast = toast;
    }
    
    
}