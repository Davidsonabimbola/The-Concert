

const plugin = require("tailwindcss/plugin")
const animationSetup = plugin(function({matchUtilities,theme}){
    matchUtilities({
        "animation-delay": (value)=>{
return{
    animationSetup: value
}
        }
    },{
        values: theme('animationSetup')
    })
},{
    theme:{
        animationSetup:{
            100:"100ms",
            200:"200ms",
            300:"300ms",
            400:"400ms",
            500:"500ms",

        },
    },
})
module.exports = animationSetup;