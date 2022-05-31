

let myPlugins = {}
myPlugins.install = function(Vue,options){
    Vue.directive(options.name,(element,params)=>{
        element.innerHTML = params.value.toUpperCase()
    })
}

export default myPlugins